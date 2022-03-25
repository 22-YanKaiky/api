const createError = require("http-errors");
const ComingSoonService = require("../services/coming.soon.service");

class ComingSoonController {
  static createComingSoon = async (request, response, message) => {
    try {
      const payload = {
        name: request.body.name,
        genre: request.body.genre,
        date: request.body.date,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const comingSoon = await ComingSoonService.createComingSoon(payload);

      response.status(201).json(comingSoon);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getAllComingSoons = async (_, response, message) => {
    try {
      const comingSoons = await ComingSoonService.getAllComingSoons();

      response.status(200).json(comingSoons);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getComingSoonByGuid = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const comingSoon = await ComingSoonService.getComingSoonByGuid(guid);

      response.status(200).json(comingSoon);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static updateComingSoon = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const payload = {
        name: request.body.name,
        genre: request.body.genre,
        date: request.body.date,
        synopsis: request.body.synopsis,
        folder: request.body.folder,
        trailer: request.body.trailer,
      };

      const comingSoon = await ComingSoonService.updateComingSoon(
        payload,
        guid
      );

      response.status(200).json(comingSoon);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static deleteComingSoon = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      await ComingSoonService.deleteComingSoon(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = ComingSoonController;
