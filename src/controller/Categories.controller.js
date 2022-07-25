require('dotenv').config();
const Joi = require('joi');
const rescue = require('express-rescue');
const categoryService = require('../service/Category.services');

const CategoryName = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required().min(3),
  }).validate(req.body);
  if (error) return next(error);
  // fazendo a validacao por meio do join do name
  const response = await categoryService.CategoryName(req.body);
  if (response.error) return next(response.error);
  return res.status(201).json(response);
});

module.exports = { CategoryName };
