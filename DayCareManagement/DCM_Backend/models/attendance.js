// module.exports = (sequelize, DataTypes) => {
//   const Attendance = sequelize.define('Attendance', {
//     date: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: { isIn: [['Present', 'Absent']] },
//     },
//   });

//   return Attendance;
// };


const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {}

  Attendance.init(
    {
      date: DataTypes.DATEONLY,
      status: {
        type: DataTypes.ENUM('Present', 'Absent'),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Attendance'
    }
  );

  return Attendance;
};
