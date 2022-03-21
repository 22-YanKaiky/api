const { PrismaClient } = require("@prisma/client");
const { default: axios } = require("axios");
const createError = require("http-errors");
const prisma = new PrismaClient();

require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

class UserService {
  static createUser = async (payload) => {
    payload.password = bcrypt.hashSync(payload.password, 8);

    let validateUser;

    if (payload.cep) {
      const cep = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${payload.cep}`
      );

      validateUser = {
        ...payload,
        state: cep.data.state,
        city: cep.data.city,
        neighborhood: cep.data.neighborhood,
        street: cep.data.street,
      };
    }

    if (!payload.cep) validateUser = payload;

    const user = await prisma.users.create({ data: validateUser });

    this.removePassword(payload);

    payload.accessToken = await jwt.signAccessToken(user);

    return payload;
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

    if (payload.cep) {
      const cep = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${payload.cep}`
      );

      user = {
        ...payload,
        state: cep.data.state,
        city: cep.data.city,
        neighborhood: cep.data.neighborhood,
        street: cep.data.street,
      };
    }

    if (!payload.cep) user = payload;

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
