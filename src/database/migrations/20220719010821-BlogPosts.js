'use strict';

module.exports = {
  // essa tabela possui uma chave estrangeira que faz a referencia ao id
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('BlogPosts',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
       },
       title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
      published : {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated : {
        type: Sequelize.DATE,
        allowNull: false,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts')
  }
};
