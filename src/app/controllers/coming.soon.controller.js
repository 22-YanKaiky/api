const createError = require("http-errors");
const ComingSoonService = require("../services/coming.soon.service");

class ComingSoonController {
  static getComingSoons = async (_, response, message) => {
    try {
      const comingSoons = await ComingSoonService.getComingSoons();

      response.status(200).json(comingSoons);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = ComingSoonController;
