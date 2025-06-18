// // models/child.js
// module.exports = (sequelize, DataTypes) => {
//   const Child = sequelize.define('Child', {
//     name: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//     profilePic: DataTypes.STRING, // Optional image path
//   });

//   return Child;
// };


const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Child extends Model {}

  Child.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      profilePic: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Child'
    }
  );

  return Child;
};
