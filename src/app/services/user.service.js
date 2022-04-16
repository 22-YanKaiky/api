const { PrismaClient } = require("@prisma/client");
const { default: axios } = require("axios");
const createError = require("http-errors");
const schema = require("../utils/schemas/user.schema");
const prisma = new PrismaClient();

require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const MailService = require("./mail.service");

class UserService {
  static createUser = async (payload) => {
    const validate = schema.validate(payload).value;

    validate.password = this.generatePassword(15);

    const password = validate.password;

    validate.password = bcrypt.hashSync(validate.password, 8);

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

    const user = await prisma.users.create({ data: validateUser });

    if (user) await MailService.createUser(user.email, password);

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

  static generatePassword(length) {
    var password = '';

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) password += characters.charAt(Math.floor(Math.random() * charactersLength));

    return password;
  }

  static removePassword = async (object) => delete object.password;
}

module.exports = UserService;
