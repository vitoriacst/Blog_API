'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
    timestamps: false,
    tableName: 'BlogPosts'
    })

    BlogPost.associate = (model) => {
        BlogPost.belongsTo(model.User, { foreignKey: 'userId', as: 'user' });
      }

  return BlogPost;
};
