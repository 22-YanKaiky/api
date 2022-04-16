const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();
const quantityLikeSchema = require('../utils/schemas/quantity.like.favorite.schema');
const schema = require("../utils/schemas/movies.schema");

class MovieService {
  static createMovie = async (payload) => {
    const validate = schema.validate(payload).value;

    const split = validate.trailer.split("https://youtu.be/");

    if (split[0])
      return createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    const validateMovie = {
      ...validate,
      trailer: trailer,
    };

    const movie = await prisma.movies.create({ data: validateMovie });

    return movie;
  };

  static getAllMovies = async () => {
    const movies = await prisma.movies.findMany();

    return movies;
  };

  static getMovieByGuid = async (guid) => {
    const movie = await prisma.movies.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!movie) return createError.NotFound("Movie not found");

    return movie;
  };

  static patchMovie = async (guid, user_guid, payload) => {
    const validate = quantityLikeSchema.validate(payload).value;

    const movie = await prisma.movies.findUnique({
      where: {
        guid: guid
      }
    });

    if (validate.like) {
      validate.dislike = false;
      movie.quantity_likes = movie.quantity_likes + 1;
    }

    if (validate.dislike) {
      validate.like = false;
      movie.quantity_dislikes = movie.quantity_dislikes + 1;
    }

    const patchMovie = await prisma.movies.update({
      where: {
        guid: guid
      },
      data: movie
    })

    /**
     * Tabela de user_movie_likes
     */
    const data = {
      user_guid: user_guid,
      movie_guid: guid,
      like: validate.like,
      dislike: validate.dislike,
      favorite: validate.favorite
    }

    const arrayMovies = await prisma.userMovieLikes.findMany({
      where: {
        movie_guid: guid,
      }
    })

    const userMovie = arrayMovies.filter((u) => u.user_guid === user_guid)[0];

    if (userMovie) {
      await prisma.userMovieLikes.update({
        where: {
          guid: userMovie.guid,
        },
        data: data
      })
    } else {
      await prisma.userMovieLikes.create({
        data: data
      })
    }

    return patchMovie;
  }

  static updateMovie = async (payload, guid) => {
    const validate = schema.validate(payload).value;

    let trailer;

    if (validate.trailer) {
      const split = validate.trailer.split("https://youtu.be/");

      if (split[0])
        return createError.UnprocessableEntity("Invalid trailer link");

      trailer = `https://www.youtube.com/embed/${split[1]}`;
    }

    const movie = {
      ...validate,
      trailer: trailer,
    };

    const updateMovie = await prisma.movies.update({
      where: {
        guid: guid,
      },
      data: movie,
    });

    return updateMovie;
  };

  static deleteMovie = async (guid) => {
    await prisma.movies.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = MovieService;
