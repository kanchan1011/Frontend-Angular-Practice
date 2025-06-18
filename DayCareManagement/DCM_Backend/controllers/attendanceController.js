// controllers/attendanceController.js
const { Attendance, Child } = require('../models');
const { Op } = require('sequelize');
const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');


exports.markAttendance = async (req, res) => {
  const { childId, date, status } = req.body;

  try {
    const child = await Child.findByPk(childId);
    if (!child) return res.status(404).json({ msg: 'Child not found' });

    const attendance = await Attendance.create({ childId, date, status });
    res.status(201).json({ msg: 'Attendance marked', attendance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const records = await Attendance.findAll({ include: Child });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET /api/attendance?childId=1&date=2025-06-18
exports.getAttendanceByChildnDate = async (req, res) => {
  const { childId, date } = req.query;

  try {
    const where = {};
    if (childId) where.childId = childId;
    if (date) where.date = date;

    const records = await Attendance.findAll({
      where,
      include: ['Child'],
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET /api/attendance/report?childId=1&period=weekly|monthly
exports.getAttendanceReport = async (req, res) => {
  const { childId, period = 'weekly' } = req.query;

  const today = new Date();
  const startDate =
    period === 'monthly'
      ? new Date(today.getFullYear(), today.getMonth(), 1)
      : new Date(today.setDate(today.getDate() - 7));

  try {
    const data = await Attendance.findAll({
      where: {
        childId,
        date: { [Op.gte]: startDate },
      },
    });

    const summary = {
      total: data.length,
      present: data.filter(d => d.status === 'Present').length,
      absent: data.filter(d => d.status === 'Absent').length,
    };

    res.json({ summary, records: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// GET /api/attendance/export?childId=1
exports.exportAttendanceCSV = async (req, res) => {
  const { childId } = req.query;

  try {
    const data = await Attendance.findAll({
      where: { childId },
      include: ['Child'],
      raw: true,
      nest: true,
    });

    const parser = new Parser({
      fields: ['date', 'status', 'Child.name'],
    });
    const csv = parser.parse(data);

    res.header('Content-Type', 'text/csv');
    res.attachment('attendance.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET /api/attendance/export-pdf?childId=1
exports.exportAttendancePDF = async (req, res) => {
  const { childId } = req.query;

  try {
    const attendance = await Attendance.findAll({
      where: { childId },
      include: ['Child'],
      raw: true,
      nest: true,
    });

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=attendance.pdf');
    doc.pipe(res);

    doc.fontSize(20).text(`Attendance Report`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Child: ${attendance[0]?.Child?.name || 'N/A'}`);
    doc.moveDown();

    attendance.forEach((record) => {
      doc.text(`${record.date} - ${record.status}`);
    });

    doc.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
