const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();
const likeSchema = require('../utils/schemas/videosLike');
const schema = require("../utils/schemas/movies");

class MovieService {
  static createMovie = async (payload) => {
    const validate = schema.validate(payload).value;

    const split = validate.trailer.split("https://youtu.be/");

    if (split[0])
      return createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    const movie = {
      ...validate,
      trailer: trailer,
    };

    const newMovie = await prisma.movies.create({ data: movie });

    return newMovie;
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
    const validate = likeSchema.validate(payload).value;

    const validateQuantity = await prisma.movies.findUnique({
      where: {
        guid: guid
      }
    });

    if (validate.like) {
      validate.dislike = false;
      validate.quantity_likes = validateQuantity.quantity_likes + 1;
    } else {
      validate.quantity_likes = validateQuantity.quantity_likes;
    }

    if (validate.dislike) {
      validate.like = false;
      validate.quantity_dislikes = validateQuantity.quantity_dislikes + 1;
    } else {
      validate.quantity_dislikes = validateQuantity.quantity_dislikes;
    }

    const patchMovie = await prisma.movies.updateMany({
      where: {
        guid: guid
      },
      data: validate
    })

    /**
     * Tabela de user_movie_likes
     */
    const data = {
      user_guid: user_guid,
      movie_guid: guid,
    }

    const arrayMovies = await prisma.userMovieLikes.findMany({
      where: {
        movie_guid: guid,
      }
    })

    const movie = arrayMovies.filter((u) => u.user_guid === user_guid)[0];

    if (movie) {
      await prisma.userMovieLikes.update({
        where: {
          guid: movie.guid,
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
