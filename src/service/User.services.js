const { User } = require('../database/models/index');

const CreateUser = async (objetoUsuario) => {
  try {
    const userInfo = await User.create(objetoUsuario, {
      attributes: { excludes: ['password'] },
      raw: true,
    });
    return userInfo;
  } catch (error) {
    return {
      error: { code: 'ALREADY_EXIXSTS', message: 'User already registered' },
    };
  }
};

const ListUsersInfos = async () => {
  try {
    const response = await User.findAll({
      attributes: { exclude: ['password'] },
      raw: true,
    });
    return response;
  } catch (error) {
    return undefined;
  }
};
const ListUsersInfosById = async (id) => {
  try {
    const response = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
      raw: true,
    });
    if (!response) {
      return {
        error: { code: 'NOT_FOUND', message: 'User does not exist' },
      };
    }
    return response;
  } catch (error) {
    return {
      error: { code: 'NOT_FOUND', message: 'User does not exist' },
    };
  }
};
module.exports = { CreateUser, ListUsersInfos, ListUsersInfosById };
