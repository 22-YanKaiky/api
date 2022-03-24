const ComingSoonService = require("../services/coming.soon.service");

class ComingSoonController {
  static createComingSoon = async (request, response) => {
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
      response.status(400).json({
        message: error,
      });
    }
  };

  static getAllComingSoons = async (_, response) => {
    try {
      const comingSoons = await ComingSoonService.getAllComingSoons();

      response.status(200).json(comingSoons);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getComingSoonByGuid = async (request, response) => {
    try {
      const guid = request.params.guid;

      const comingSoon = await ComingSoonService.getComingSoonByGuid(guid);

      response.status(200).json(comingSoon);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static updateComingSoon = async (request, response) => {
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
      response.status(400).json({
        message: error,
      });
    }
  };

  static deleteComingSoon = async (request, response) => {
    try {
      const guid = request.params.guid;

      await ComingSoonService.deleteComingSoon(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };
}

module.exports = ComingSoonController;
