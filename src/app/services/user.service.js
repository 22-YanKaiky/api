const { PrismaClient } = require("@prisma/client");
const { default: axios } = require("axios");
const createError = require("http-errors");
const prisma = new PrismaClient();

require("dotenv").config();
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

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

class UserService {
  static createUser = async (payload) => {
    payload.password = bcrypt.hashSync(payload.password, 8);
    
    const validate = schema.validate(payload);

    let validateUser;

    if (validate.zipcode) {
      const zipcode = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${validate.zipcode}`
      );

      validateUser = {
        ...validate,
        state: zipcode.data.state,
        city: zipcode.data.city,
        neighborhood: zipcode.data.neighborhood,
        street: zipcode.data.street,
      };
    }

    if (!validate.zipcode) validateUser = validate;

    const user = await prisma.users.create({ data: validateUser.value });

    this.removePassword(user);

    user.accessToken = await jwt.signAccessToken(user);

    return user;
  };

  static getAllUsers = async () => {
    const users = await prisma.users.findMany();

    for (const user of users) this.removePassword(user);

    return users;
  };

  static getUserByGuid = async (guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!user) return createError.NotFound("Anime not found");

    this.removePassword(user);

    return user;
  };

  static updateUser = async (payload, guid) => {
    const validate = schema.validate(payload);
    
    let user;

    if (validate.zipcode) {
      const zipcode = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${validate.zipcode}`
      );

      user = {
        ...validate,
        state: zipcode.data.state,
        city: zipcode.data.city,
        neighborhood: zipcode.data.neighborhood,
        street: zipcode.data.street,
      };
    }

    if (!validate.zipcode) user = validate;

    const updateUser = await prisma.users.update({
      where: {
        guid: guid,
      },
      data: user,
    });

    this.removePassword(updateUser);

    return updateUser;
  };

  static deleteUser = async (guid) => {
    await prisma.users.delete({
      where: {
        guid: guid,
      },
    });
  };

  static removePassword = async (object) => delete object.password;
}

module.exports = UserService;
