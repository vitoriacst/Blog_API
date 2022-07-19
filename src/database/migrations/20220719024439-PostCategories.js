'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('PostCategories',{
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
      categoryId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        }
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories')
  }
};
