// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Child = require('./child')(sequelize, Sequelize.DataTypes);
const Attendance = require('./attendance')(sequelize, Sequelize.DataTypes);

// Define associations
User.hasMany(Child, { onDelete: 'CASCADE' });
Child.belongsTo(User);

Child.hasMany(Attendance, { onDelete: 'CASCADE' });
Attendance.belongsTo(Child);

module.exports = { sequelize, Sequelize,User, Child, Attendance };
