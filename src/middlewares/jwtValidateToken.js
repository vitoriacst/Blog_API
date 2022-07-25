require('dotenv/config');
const jwt = require('jsonwebtoken');

const TakeTokenSecret = process.env.JWT_SECRET;

// criacao do token
module.exports = (req, res, next) => {
  const AuthToken = req.headers.authorization;
  if (!AuthToken) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoder = jwt.verify(AuthToken, TakeTokenSecret);
    req.user = decoder.data;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

// linha 11 ele foi a decodificacao do token
