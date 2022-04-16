const Joi = require("joi");

const likeSchema = Joi.object().keys({
  likes: Joi.boolean().optional().default(false),
  dislikes: Joi.boolean().optional().default(false),
  favorite: Joi.boolean().optional().default(false),
});

module.exports = likeSchema;
