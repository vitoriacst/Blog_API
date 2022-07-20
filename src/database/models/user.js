const { DataTypes } = require("sequelize/types");

const createModelUser = (sequelize,DataTypes) => {
 const user = sequelize.define('user',{
  id: DataTypes.INTEGER,
   displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
 },{
  tableName: 'Users'
 })
 return user
}

module.exports = createModelUser;
