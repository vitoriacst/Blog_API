const authService = require('../service/auth.services');

module.exports = {
  Login: async (req, res) => {
    const token = await authService.Login(req.body);
    return res.status(200).json(token);
  },
};
