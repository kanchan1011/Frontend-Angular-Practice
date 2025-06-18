// models/child.js
module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define('Child', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    profilePic: DataTypes.STRING, // Optional image path
  });

  return Child;
};
