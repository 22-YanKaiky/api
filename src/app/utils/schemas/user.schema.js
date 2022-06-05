const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required().trim(),
  last_name: Joi.string().trim().optional(),
  email: Joi.string().email().lowercase().required().trim(),
  password: Joi.string().min(8).optional(),
  admin: Joi.boolean().default(false).optional(),
  image_url: Joi.string().optional(),
});

module.exports = schema;
