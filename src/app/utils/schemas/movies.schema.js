const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required().trim(),
  link: Joi.string().optional().trim(),
  comming_soon: Joi.boolean().default(true).required(),
  date: Joi.date().optional(),
  quantity_likes: Joi.number().optional().default(0),
  quantity_dislikes: Joi.number().optional().default(0),
  genre: Joi.string().required(),
  time: Joi.string().required(),
  direction: Joi.string().required(),
  year: Joi.number().required(),
  synopsis: Joi.string().required(),
  folder: Joi.string().required(),
  trailer: Joi.string().trim().required(),
});

module.exports = schema;
