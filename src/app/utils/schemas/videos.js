const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required().trim(),
  link: Joi.string().trim(),
  genre: Joi.string().required(),
  seasons: Joi.number().required(),
  episodes: Joi.number().required(),
  year: Joi.number().required(),
  synopsis: Joi.string().required(),
  folder: Joi.string().required(),
  trailer: Joi.string().trim().required(),
});

module.exports = schema;
