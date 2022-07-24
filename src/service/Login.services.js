const { User } = require('../database/models/index');

const userEmail = async (email) => {
  try {
    const response = await User.findOne({
      where: { email },
      attributes: { excludes: ['password'] },
      raw: true,
      // vai transformar em json (Raw)
    });
    if (!response) {
      return { error: { code: 'INVALID_DATA', message: 'Invalid Fields' } };
    }
    return response;
  } catch (error) {
    return { error: { code: 'INVALID_DATA', message: 'Invalid Fields' } };
  }
};
module.exports = { userEmail };
