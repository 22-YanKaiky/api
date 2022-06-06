const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();
const trailer = require("../utils/functions/trailer");
const schema = require("../utils/schemas/movies.schema");
const sortName = require("../utils/functions/sort.name");

class MovieService {
  static createMovie = async (payload) => {
    payload.trailer = trailer.split(payload.trailer);

    const validate = schema.validate(payload).value;

    const movie = await prisma.movies.create({ data: validate });

    return movie;
  };

  static getAllMovies = async () => {
    const movies = await prisma.movies.findMany();

    sortName(movies);

    return movies;
  };

  static getMovieByGuid = async (guid) => {
    const movie = await prisma.movies.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!movie) throw createError.NotFound("MOVIE_NOT_FOUND");

    return movie;
  };

  static updateMovie = async (payload, guid) => {
    const movie = await prisma.movies.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!movie) throw createError.NotFound("MOVIE_NOT_FOUND");

    if (payload.trailer) payload.trailer = trailer.split(payload.trailer);

    const validate = schema.validate(payload).value;

    const updateMovie = await prisma.movies.update({
      where: {
        guid: guid,
      },
      data: validate,
    });

    return updateMovie;
  };

  static deleteMovie = async (guid) => {
    const movie = await prisma.movies.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!movie) throw createError.NotFound("MOVIE_NOT_FOUND");

    await prisma.movies.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = MovieService;
