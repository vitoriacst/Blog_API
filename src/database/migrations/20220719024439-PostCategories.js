'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('PostCategories',{
      postId: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
      categoryId:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories')
  }
};
