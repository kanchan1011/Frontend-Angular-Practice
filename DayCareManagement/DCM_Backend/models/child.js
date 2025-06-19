const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    static associate(models) {
      // e.g., Child.belongsTo(models.User);
    }
  }

  Child.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      profilePic: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Child',
      tableName: 'children',
      timestamps: true
    }
  );

  return Child;
};
