'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('PostCategories',{
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
      },
      categoryId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
