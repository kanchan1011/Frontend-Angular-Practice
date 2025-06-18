// controllers/childController.js
const { Child } = require('../models');

exports.createChild = async (req, res) => {
  const { name, age } = req.body;
  const userId = req.user.id;

  try {
    const child = await Child.create({ name, age, UserId: userId });
    res.status(201).json({ msg: 'Child added', child });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getChildren = async (req, res) => {
  try {
    const children = await Child.findAll({ where: { UserId: req.user.id } });
    res.json(children);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadProfilePic = async (req, res) => {
  const childId = req.params.id;
  const profilePic = req.file.path;

  try {
    const child = await Child.findByPk(childId);
    if (!child) return res.status(404).json({ msg: 'Child not found' });

    child.profilePic = profilePic;
    await child.save();

    res.json({ msg: 'Profile picture uploaded', child });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
