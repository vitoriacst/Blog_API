require('dotenv').config();
const Joi = require('joi');
const rescue = require('express-rescue');
const JWT = require('jsonwebtoken');
const UserService = require('../service/User.services');

const jwtSecret = process.env.JWT_SECRET;

const CreateUser = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    image: Joi.string(),
  }).validate(req.body);
  if (error) return next(error);

  const response = await UserService.CreateUser(req.body);
  if (response.error) return next(response.error);
  const config = {
    expiresIn: '2d',
    algorithm: 'HS256',
  };

  const token = JWT.sign({ data: response }, jwtSecret, config);
  return res.status(201).json({ token });
});

const ListUsersInfos = rescue(async (_req, res, next) => {
  const response = await UserService.ListUsersInfos();
  if (!response) {
    return next(response.error);
  }
  return res.status(200).json(response);
});

const ListUsersInfosById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const response = await UserService.ListUsersInfosById(id);
  if (response.error) {
    return next(response.error);
  }
  return res.status(200).json(response);
});
module.exports = { CreateUser, ListUsersInfos, ListUsersInfosById };
