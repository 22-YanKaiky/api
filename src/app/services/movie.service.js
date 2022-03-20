const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MovieService {
  static createMovie = async (payload) => {
    let trailer;

    payload.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        payload.trailer.split("/")[3]
      }`);

    const movie = {
      ...payload,
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

    return movie;
  };

  static updateMovie = async (payload, guid) => {
    let trailer;

    payload.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        payload.trailer.split("/")[3]
      }`);

    const movie = {
      ...payload,
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
