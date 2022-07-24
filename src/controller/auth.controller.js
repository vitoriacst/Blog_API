const authService = require('../service/Login');

module.exports = {
  Login: async (req, res) => {
    const token = await authService.Login(req.body);
    return res.status(200).json(token);
  },
};
