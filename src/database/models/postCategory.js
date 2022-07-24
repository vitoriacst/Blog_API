'use strict';

const createModelPostCategory = (sequelize,DataTypes) => {
 const PostCategory = sequelize.define('PostCategory',{
  postId: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER,
 },{
  tableName: 'PostCategory'
 })
 PostCategory.associate = (model) => {
 model.BlogPost.belongsToMany(model.Category, {
  as: 'categories',
  through: PostCategory,
  foreignKey: 'categoryId',
  otherKey: 'postId',
});

model.Category.belongsToMany(model.BlogPost, {
  as: 'posts',
  through: PostCategory,
  foreignKey: 'postId',
  otherKey: 'categoryId',
});
 }
 return PostCategory
}

module.exports = createModelPostCategory;
