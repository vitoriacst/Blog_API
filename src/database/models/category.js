'use strict';

const createModelCategory = (sequelize, DataTypes) => {
  const category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return category;
};

module.exports = createModelCategory;
