const createError = require("http-errors");
const FavoritesService = require("../services/favorites.service");

class FavoritesController {
  static getFavorites = async (request, response, message) => {
    try {
      const user_guid = request.params.user_guid
      
      const favorites = await FavoritesService.getFavorites(user_guid);

      response.status(200).json(favorites);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = FavoritesController;
