const { User, Child } = require('../models');

// GET /api/admin/users
exports.getAllUsersWithChildren = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'role'],
      include: {
        model: Child,
        attributes: ['id', 'name', 'age'],
      },
    });

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [Child]
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

