const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Child = require('./child')(sequelize, Sequelize.DataTypes);
const Attendance = require('./attendance')(sequelize, Sequelize.DataTypes);

// Setup associations
User.hasMany(Child, { foreignKey: 'userId', onDelete: 'CASCADE' });
Child.belongsTo(User, { foreignKey: 'userId' });

Child.hasMany(Attendance, { foreignKey: 'childId', onDelete: 'CASCADE' });
Attendance.belongsTo(Child, { foreignKey: 'childId' });

// If models define their own associate method, call them
[User, Child, Attendance].forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate({ User, Child, Attendance });
  }
});

module.exports = {
  sequelize,
  Sequelize,
  User,
  Child,
  Attendance
};
