const createError = require("http-errors");
const SerieService = require("../services/serie.service");

class SerieController {
  static createSerie = async (request, response, message) => {
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
        seasons: request.body.seasons,
        episodes: request.body.episodes,
        year: request.body.year,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const serie = await SerieService.createSerie(payload);

      response.status(201).json(serie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getAllSeries = async (_, response, message) => {
    try {
      const series = await SerieService.getAllSeries();

      response.status(200).json(series);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getSerieByGuid = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const serie = await SerieService.getSerieByGuid(guid);

      response.status(200).json(serie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static patchSerie = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const payload = {
        like: request.body.like,
        dislike: request.body.dislike,
        quantity_likes: request.body.quantity_likes,
        quantity_dislikes: request.body.quantity_dislikes,
      };

      const serie = await SerieService.patchSerie(payload, guid);

      response.status(200).json(serie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static updateSerie = async (request, response, message) => {
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
        seasons: request.body.seasons,
        episodes: request.body.episodes,
        year: request.body.year,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const serie = await SerieService.updateSerie(payload, guid);

      response.status(200).json(serie);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static deleteSerie = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      await SerieService.deleteSerie(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = SerieController;
