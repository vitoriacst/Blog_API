'use strict';

const createModelUser = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  user.associate = (model) => {
    user.hasMany(model.BlogPost, { foreignKey: 'userId', as: 'posts' });
  };
  return user;
};

module.exports = createModelUser;
