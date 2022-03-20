const MovieService = require("../services/movie.service");

class MovieController {
  static createMovie = async (request, response) => {
    try {
      const payload = {
        name: request.body.name,
        link: request.body.link,
        genre: request.body.genre,
        time: request.body.time,
        year: request.body.year,
        direction: request.body.direction,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const movie = await MovieService.createMovie(payload);

      response.status(201).json({
        status: 201,
        statusText: "Created",
        message: "Create movie successful",
        data: movie,
      });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getAllMovies = async (_, response) => {
    try {
      const movies = await MovieService.getAllMovies();

      response.status(200).json({
        status: 200,
        statusText: "OK",
        message: "Successful",
        data: movies,
      });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getMovieByGuid = async (request, response) => {
    try {
      const guid = request.params.guid;

      const movie = await MovieService.getMovieByGuid(guid);

      response.status(200).json({
        status: 200,
        statusText: "OK",
        message: "Successful",
        data: movie,
      });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static updateMovie = async (request, response) => {
    try {
      const guid = request.params.guid;

      const payload = {
        name: request.body.name,
        link: request.body.link,
        genre: request.body.genre,
        time: request.body.time,
        year: request.body.year,
        direction: request.body.direction,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const movie = await MovieService.updateMovie(payload, guid);

      response.status(200).json({
        status: 200,
        statusText: "OK",
        message: "Successful",
        data: movie,
      });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static deleteMovie = async (request, response) => {
    try {
      const guid = request.params.guid;

      await MovieService.deleteMovie(guid);

      response.status(200).json({
        status: 200,
        statusText: "OK",
        message: "Successful deleted",
      });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };
}

module.exports = MovieController;
