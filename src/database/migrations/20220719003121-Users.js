'use strict';

module.exports = {
  // Migration para criar a tabela users
  up: async (queryInterface, Sequelize) => {
   queryInterface.createTable('Users',
   {
    id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true,
   },
   displayName: {
    allowNull: false,
    type: Sequelize.STRING
  },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
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
    await queryInterface.dropTable('Users')
  }
};
