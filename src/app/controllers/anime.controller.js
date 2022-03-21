const AnimeService = require("../services/anime.service");

class AnimeController {
  static createAnime = async (request, response) => {
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

      const anime = await AnimeService.createAnime(payload);

      response.status(201).json(anime);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getAllAnimes = async (_, response) => {
    try {
      const animes = await AnimeService.getAllAnimes();

      response.status(200).json(animes);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getAnimeByGuid = async (request, response) => {
    try {
      const guid = request.params.guid;

      const anime = await AnimeService.getAnimeByGuid(guid);

      response.status(200).json(anime);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static updateAnime = async (request, response) => {
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

      const anime = await AnimeService.updateAnime(payload, guid);

      response.status(200).json(anime);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static deleteAnime = async (request, response) => {
    try {
      const guid = request.params.guid;

      await AnimeService.deleteAnime(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };
}

module.exports = AnimeController;
