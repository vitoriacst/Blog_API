'use strict';

const createModelUser = (sequelize,DataTypes) => {
 const user = sequelize.define('User',{
  id: DataTypes.INTEGER,
   displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
 },{
  tableName: 'Users'
 })
 user.associate = (model) => {
   user.hasMany(model.BlogPost, { foreignKey: 'userId', as: 'posts' });
 }
 return user
}

module.exports = createModelUser;
