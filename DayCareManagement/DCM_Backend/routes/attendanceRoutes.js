// routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/roleCheck');

router.post('/', verifyToken, attendanceController.markAttendance);
router.get('/', verifyToken,checkRole(['admin']), attendanceController.getAttendance);
router.get('/report', verifyToken, attendanceController.getAttendanceReport);
router.get('/export', verifyToken, attendanceController.exportAttendanceCSV);
router.get('/export-pdf', verifyToken, attendanceController.exportAttendancePDF);




module.exports = router;
