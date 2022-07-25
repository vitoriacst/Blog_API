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
module.exports = { CreateUser };
