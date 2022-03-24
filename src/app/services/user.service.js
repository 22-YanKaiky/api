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
  password: Joi.string().min(8),
  isAdmin: Joi.boolean().default(false),
  genre: Joi.string().valid('male', 'female'),
  image_url: Joi.string(),
  country: Joi.string(),
  zipcode: Joi.string().min(3).trim(),
  house_number: Joi.string(),
});

class UserService {
  static createUser = async (payload) => {
    const validate = schema.validate(payload);

    console.log(validate)
    
    payload.password = bcrypt.hashSync(payload.password, 8);

    let validateUser;

    if (payload.zipcode) {
      const zipcode = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${payload.zipcode}`
      );

      validateUser = {
        ...payload,
        state: zipcode.data.state,
        city: zipcode.data.city,
        neighborhood: zipcode.data.neighborhood,
        street: zipcode.data.street,
      };
    }

    if (!payload.zipcode) validateUser = payload;

    const user = await prisma.users.create({ data: validateUser });

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
    let user;

    if (payload.zipcode) {
      const zipcode = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${payload.zipcode}`
      );

      user = {
        ...payload,
        state: zipcode.data.state,
        city: zipcode.data.city,
        neighborhood: zipcode.data.neighborhood,
        street: zipcode.data.street,
      };
    }

    if (!payload.zipcode) user = payload;

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
