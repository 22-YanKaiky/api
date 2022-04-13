const Joi = require("joi");

const likeSchema = Joi.object().keys({
  like: Joi.bool().optional(),
  dislike: Joi.bool().optional(),
});

module.exports = likeSchema;
