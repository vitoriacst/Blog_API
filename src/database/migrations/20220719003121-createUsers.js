'use strict';

module.exports = {
  // Migration para criar a tabela users
  up: async (queryInterface, Sequelize) => {
   queryInterface.createTable('users',
   {
    id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true,
   },
    displayName: {
      type: Sequelize.STRING,
      allowNull: false,
      field:'display_name',
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }
   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
