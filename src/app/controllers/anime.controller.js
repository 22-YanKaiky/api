const createError = require("http-errors");
const AnimeService = require("../services/anime.service");

class AnimeController {
  static createAnime = async (request, response, message) => {
    try {
      const payload = {
        name: request.body.name,
        link: request.body.link,
        comming_soon: request.body.comming_soon,
        date: request.body.date,
        quantity_likes: request.body.quantity_likes,
        quantity_dislikes: request.body.quantity_dislikes,
        genre: request.body.genre,
        seasons: request.body.seasons,
        episodes: request.body.episodes,
        year: request.body.year,
        synopsis: request.body.synopsis,
        folder: request.file.location,
        trailer: request.body.trailer,
      };

      const anime = await AnimeService.createAnime(payload);

      response.status(201).json(anime);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getAllAnimes = async (_, response, message) => {
    try {
      const animes = await AnimeService.getAllAnimes();

      response.status(200).json(animes);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getAnimeByGuid = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const anime = await AnimeService.getAnimeByGuid(guid);

      response.status(200).json(anime);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static patchAnime = async (request, response, message) => {
    try {
      const guid = request.params.guid;
      const user_guid = request.params.user_guid;

      const payload = {
        like: request.body.like,
        dislike: request.body.dislike,
        favorite: request.body.favorite,
      };

      const anime = await AnimeService.patchAnime(guid, user_guid, payload);

      response.status(200).json(anime);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static updateAnime = async (request, response, message) => {
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
        folder: request.file ? request.file.location : request.body.folder,
        trailer: request.body.trailer,
      };

      const anime = await AnimeService.updateAnime(payload, guid);

      response.status(200).json(anime);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static deleteAnime = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      await AnimeService.deleteAnime(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = AnimeController;
