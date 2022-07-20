'use strict';

const createModelPostCategory = (sequelize,DataTypes) => {
 const PostCategory = sequelize.define('PostCategory',{
  postId: DataTypes.INTEGER,
  references: {
    model: 'PostCategories',
    key: 'id',
  },
  categoryId: DataTypes.INTEGER,
 },{
  tableName: 'PostCategory'
 })
 PostCategory.associate = (model) => {
 model.BlogPost.belongsToMany(model.Category, {
  as: 'postsCategories',
  through: PostCategory,
  foreignKey: 'categoryId',
  otherKey: 'postId',
});
 }

model.Category.belongsToMany(model.BlogPost, {
  as: 'categories',
  through: PostCategory,
  foreignKey: 'categoryId',
  otherKey: 'postId',
});

 return PostCategory
}

module.exports = createModelPostCategory;
