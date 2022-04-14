const createError = require("http-errors");
const MovieService = require("../services/movie.service");

class MovieController {
  static createMovie = async (request, response, message) => {
    try {
      const payload = {
        name: request.body.name,
        link: request.body.link,
        comming_soon: request.body.comming_soon,
        date: request.body.date,
        like: request.body.like,
        dislike: request.body.dislike,
        quantity_likes: request.body.quantity_likes,
        quantity_dislikes: request.body.quantity_dislikes,
        genre: request.body.genre,
        time: request.body.time,
        year: request.body.year,
        direction: request.body.direction,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const movie = await MovieService.createMovie(payload);

      response.status(201).json(movie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getAllMovies = async (_, response, message) => {
    try {
      const movies = await MovieService.getAllMovies();

      response.status(200).json(movies);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getMovieByGuid = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const movie = await MovieService.getMovieByGuid(guid);

      response.status(200).json(movie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static patchMovie = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const payload = {
        like: request.body.like,
        dislike: request.body.dislike,
        quantity_likes: request.body.quantity_likes,
        quantity_dislikes: request.body.quantity_dislikes,
      };

      const movie = await MovieService.patchMovie(payload, guid);

      response.status(200).json(movie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static updateMovie = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const payload = {
        name: request.body.name,
        link: request.body.link,
        comming_soon: request.body.comming_soon,
        date: request.body.date,
        like: request.body.like,
        dislike: request.body.dislike,
        quantity_likes: request.body.quantity_likes,
        quantity_dislikes: request.body.quantity_dislikes,
        genre: request.body.genre,
        time: request.body.time,
        year: request.body.year,
        direction: request.body.direction,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const movie = await MovieService.updateMovie(payload, guid);

      response.status(200).json(movie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static deleteMovie = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      await MovieService.deleteMovie(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = MovieController;
