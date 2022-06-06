const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const schema = require("../utils/schemas/user.schema");
const prisma = new PrismaClient();
const videoFavorites = require('../utils/functions/favorites');

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

  static createUserFavorite = async (guid, favorite_guid, type) => {
    /**
     * @param type
     * @enum (anime, movie, serie)
     * @return { String }
     */

    const user = await prisma.users.findUnique({
      where: {
        guid
      }
    })

    if (!user) throw createError.NotFound("USER_NOT_FOUND")

    // ANIMES
    if (type === 'anime') {
      const anime = await prisma.animes.findUnique({
        where: {
          guid: favorite_guid
        }
      })

      if (!anime) throw createError.NotFound("ANIME_NOT_FOUND")

      const findFavorite = await prisma.userAnimeFavorites.findFirst({
        where: {
          user_guid: guid,
          anime_guid: favorite_guid,
        }
      })

      if (findFavorite) throw createError.NotImplemented("FAVORITE_ANIME_EXISTIS")

      const data = {
        user_guid: guid,
        anime_guid: favorite_guid,
      }

      if (!findFavorite) {
        const favorite = prisma.userAnimeFavorites.create({
          data: data
        })

        return favorite;
      }
    }

    // MOVIES
    if (type === 'movie') {
      const movie = await prisma.movies.findUnique({
        where: {
          guid: favorite_guid
        }
      })

      if (!movie) throw createError.NotFound("MOVIE_NOT_FOUND")

      const findFavorite = await prisma.userMovieFavorites.findFirst({
        where: {
          user_guid: guid,
          movie_guid: favorite_guid,
        }
      })

      if (findFavorite) throw createError.NotImplemented("FAVORITE_MOVIE_EXISTIS")

      const data = {
        user_guid: guid,
        movie_guid: favorite_guid,
      }

      if (!findFavorite) {
        const favorite = prisma.userMovieFavorites.create({
          data: data
        })

        return favorite;
      }
    }

    // SERIES
    if (type === 'serie') {
      const serie = await prisma.series.findUnique({
        where: {
          guid: favorite_guid
        }
      })

      if (!serie) throw createError.NotFound("SERIE_NOT_FOUND")

      const findFavorite = await prisma.userSerieFavorites.findFirst({
        where: {
          user_guid: guid,
          serie_guid: favorite_guid,
        }
      })

      if (findFavorite) throw createError.NotImplemented("FAVORITE_SERIE_EXISTIS")

      const data = {
        user_guid: guid,
        serie_guid: favorite_guid,
      }

      if (!findFavorite) {
        const favorite = prisma.userSerieFavorites.create({
          data: data
        })

        return favorite;
      }
    }
  }

  static getUserByGuid = async (guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!user) throw createError.NotFound("USER_NOT_FOUND");

    this.removePassword(user);

    return user;
  };

  static getUserFavorites = async (guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!user) throw createError.NotFound("USER_NOT_FOUND");

    const animes = [];
    const movies = [];
    const series = [];

    /** Find in user_favorites */
    const userAnimes = await prisma.userAnimeFavorites.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    const userMovies = await prisma.userMovieFavorites.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    const userSeries = await prisma.userSerieFavorites.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    /** Functions to find in video tables */
    await videoFavorites(userAnimes, animes, 'anime');

    await videoFavorites(userMovies, movies, 'movie');

    await videoFavorites(userSeries, series, 'serie');

    /** New Array with type video */
    const animesFavorite = animes.map((a) => ({
      ...a,
      type: 'anime'
    }))

    const moviesFavorite = movies.map((a) => ({
      ...a,
      type: 'movie'
    }))

    const seriesFavorite = series.map((a) => ({
      ...a,
      type: 'serie'
    }))

    const favorites = [...animesFavorite, ...moviesFavorite, ...seriesFavorite];

    sortName(favorites);

    return favorites
  };

  static updateUser = async (payload, guid) => {
    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!user) throw createError.NotFound("USER_NOT_FOUND");

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

    if (!user) throw createError.NotFound("USER_NOT_FOUND");

    await prisma.users.delete({
      where: {
        guid: guid,
      },
    });
  };

  static generatePassword(length) {
    let password = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) password += characters.charAt(Math.floor(Math.random() * charactersLength));

    return password;
  }

  static removePassword = async (user) => delete user.password;
}

module.exports = UserService;
