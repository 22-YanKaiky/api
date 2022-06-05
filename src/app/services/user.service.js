const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const schema = require("../utils/schemas/user.schema");
const prisma = new PrismaClient();

require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const MailService = require("./mail.service");
const sortName = require("../utils/functions/sort.name");

class UserService {
  static createUser = async (payload) => {
    if (!payload.password) payload.password = this.generatePassword(15);

    const validate = schema.validate(payload).value;

    const password = validate.password;

    validate.password = bcrypt.hashSync(validate.password, 8);

    const user = await prisma.users.create({ data: validate });

    if (user) await MailService.createUser(user.email, password);

    this.removePassword(user);

    user.accessToken = await jwt.signAccessToken(user);

    return user;
  };

  static getAllUsers = async () => {
    const users = await prisma.users.findMany();

    for (const user of users) this.removePassword(user);

    sortName(users);

    return users;
  };

  static getUserByGuid = async (guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!user) throw createError.NotFound("User not found");

    this.removePassword(user);

    return user;
  };

  static getUserFavorites = async (/* guid */) => {
    // const animes = [];
    // const movies = [];
    // const series = [];

    // /** Find in user_likes */
    // const userAnimes = await prisma.userAnimeLikes.findMany({
    //   where: {
    //     user_guid: user_guid,
    //   }
    // });

    // const userMovies = await prisma.userMovieLikes.findMany({
    //   where: {
    //     user_guid: user_guid,
    //   }
    // });

    // const userSeries = await prisma.userSerieLikes.findMany({
    //   where: {
    //     user_guid: user_guid,
    //   }
    // });

    // /** Functions to find in video tables */
    // await this.videoFavorites(userAnimes, animes, 'anime');

    // await this.videoFavorites(userMovies, movies, 'movie');

    // await this.videoFavorites(userSeries, series, 'serie');

    // /** New Array with type video */
    // const animesFavorite = animes.map((a) => ({
    //   ...a,
    //   type: 'anime'
    // }))

    // const moviesFavorite = movies.map((a) => ({
    //   ...a,
    //   type: 'movie'
    // }))

    // const seriesFavorite = series.map((a) => ({
    //   ...a,
    //   type: 'serie'
    // }))

    // const favorites = [...animesFavorite, ...moviesFavorite, ...seriesFavorite];
    const favorites = ["Um - 1", "Dois - 2", "Três - 3"];

    sortName(favorites);

    return favorites
  };

  static updateUser = async (payload, guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!user) throw createError.NotFound("User not found");

    const updateUser = await prisma.users.update({
      where: {
        guid: guid,
      },
      data: payload,
    });

    this.removePassword(updateUser);

    updateUser.accessToken = await jwt.signAccessToken(updateUser);

    return updateUser;
  };

  static deleteUser = async (guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!user) throw createError.NotFound("User not found");

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

  static removePassword = async (user) => delete user.password;
}

module.exports = UserService;
