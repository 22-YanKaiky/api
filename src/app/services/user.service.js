const { PrismaClient } = require("@prisma/client");
const { default: axios } = require("axios");
const prisma = new PrismaClient();

class UserService {
  static createUser = async (payload) => {
    let cep;
    let user;

    if (payload.cep) {
      cep = await axios.get(
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

    const newUser = await prisma.users.create({ data: user });

    return newUser;
  };

  static getAllUsers = async () => {
    const users = await prisma.users.findMany();

    return users;
  };

  static getUserByGuid = async (guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    return user;
  };

  static updateUser = async (payload, guid) => {
    let cep;
    let user;

    if (payload.cep) {
      cep = await axios.get(
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

    return updateUser;
  };

  static deleteUser = async (guid) => {
    await prisma.users.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = UserService;
