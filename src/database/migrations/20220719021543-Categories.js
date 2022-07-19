'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Categories',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories')
  }
};
