module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isIn: [['Present', 'Absent']] },
    },
  });

  return Attendance;
};
