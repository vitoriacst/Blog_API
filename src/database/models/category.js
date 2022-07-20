'use strict';

const createModelCategory = (sequelize,DataTypes) => {
 const category = sequelize.define('Category',{
  id: DataTypes.INTEGER,
  name: DataTypes.STRING,
 },{
  tableName: 'Category'
 })

 return category
}

module.exports = createModelCategory;
