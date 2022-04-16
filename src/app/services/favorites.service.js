const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class FavoritesService {
  static getFavorites = async (user_guid) => {};
}

module.exports = FavoritesService;
