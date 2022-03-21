const SerieService = require("../services/serie.service");

class SerieController {
  static createSerie = async (request, response) => {
    try {
      const payload = {
        name: request.body.name,
        link: request.body.link,
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
      response.status(400).json({
        message: error,
      });
    }
  };

  static getAllSeries = async (_, response) => {
    try {
      const series = await SerieService.getAllSeries();

      response.status(200).json(series);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getSerieByGuid = async (request, response) => {
    try {
      const guid = request.params.guid;

      const serie = await SerieService.getSerieByGuid(guid);

      response.status(200).json(serie);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static updateSerie = async (request, response) => {
    try {
      const guid = request.params.guid;

      const payload = {
        name: request.body.name,
        link: request.body.link,
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
      response.status(400).json({
        message: error,
      });
    }
  };

  static deleteSerie = async (request, response) => {
    try {
      const guid = request.params.guid;

      await SerieService.deleteSerie(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };
}

module.exports = SerieController;
