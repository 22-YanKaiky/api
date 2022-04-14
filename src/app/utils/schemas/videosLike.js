const Joi = require("joi");

const likeSchema = Joi.object().keys({
  like: Joi.bool().optional().default(false),
  dislike: Joi.bool().optional().default(false),
  quantity_likes: Joi.number().optional().default(0),
  quantity_dislikes: Joi.number().optional().default(0),
});

module.exports = likeSchema;
