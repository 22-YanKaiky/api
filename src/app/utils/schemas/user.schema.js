const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required().trim(),
  last_name: Joi.string().trim(),
  email: Joi.string().email().lowercase().required().trim(),
  phone: Joi.string(),
  birthday: Joi.date().required(),
  password: Joi.string().min(8),
  isAdmin: Joi.boolean().default(false),
  genre: Joi.string().valid("male", "female"),
  image_url: Joi.string(),
  country: Joi.string(),
  zipcode: Joi.string().min(3).trim(),
  house_number: Joi.string(),
});

module.exports = schema;
