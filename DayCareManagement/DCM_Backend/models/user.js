// const { DataTypes } = require('sequelize');
// const db = require('../config/db');

//  const User = db.define('User', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   role: {
//     type: DataTypes.ENUM('admin', 'staff', 'parent'),
//     defaultValue: 'parent'
//   }
// });

// module.exports = User;



const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // You can define associations here later if needed
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('admin', 'parent'),
        defaultValue: 'parent'
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );

  return User;
};
