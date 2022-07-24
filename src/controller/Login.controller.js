require('dotenv').config();
const rescue = require('express-rescue');
const JWT = require('jsonwebtoken');
const loginService = require('../service/Login.services');

const TakeTokenSecret = process.env.JWT_SECRET;

const userInformations = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({
      code: 'REQUIRED',
      message: 'Some required fields are missing',
    });
  }
  const result = await loginService.userEmail(email);
  if (result.error) return next(result.error);

  const config = {
    expiresIn: '2d',
    algorithm: 'HS256',
  };
  const token = JWT.sign({ data: result }, TakeTokenSecret, config);
  return res.status(200).json({ token });
});

module.exports = { userInformations };
