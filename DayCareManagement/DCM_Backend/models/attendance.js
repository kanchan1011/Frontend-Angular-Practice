const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      // e.g., Attendance.belongsTo(models.Child);
    }
  }

  Attendance.init(
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('Present', 'Absent'),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Attendance',
      tableName: 'attendances',
      timestamps: true
    }
  );

  return Attendance;
};
