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

  static patchMovie = async (payload, guid) => {
    const validate = likeSchema.validate(payload).value;

    if (validate.like) {
      // Trazer do banco o valor total + 1
      validate.quantity_likes = validate.quantity_likes + 1;
      validate.dislike = false;
    }

    if (validate.dislike) {
      validate.like = false;
      validate.quantity_dislikes = validate.quantity_dislikes + 1;
    }

    const patchMovie = await prisma.movies.updateMany({
      where: {
        guid: guid
      },
      data: validate
    })

    // user_movie_likes
    
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
