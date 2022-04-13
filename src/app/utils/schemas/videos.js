const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required().trim(),
  link: Joi.string().optional().trim(),
  comming_soon: Joi.boolean().default(true).required(),
  date: Joi.date().optional(),
  like: Joi.number().optional(),
  dislike: Joi.number().optional(),
  genre: Joi.string().required(),
  seasons: Joi.number().required(),
  episodes: Joi.number().required(),
  year: Joi.number().required(),
  synopsis: Joi.string().required(),
  folder: Joi.string().required(),
  trailer: Joi.string().trim().required(),
});

module.exports = schema;
