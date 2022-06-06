const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const sortName = require("../utils/functions/sort.name");
const trailer = require("../utils/functions/trailer");
const prisma = new PrismaClient();
const schema = require("../utils/schemas/series.animes.schema");

class AnimeService {
  static createAnime = async (payload) => {
    payload.trailer = trailer.split(payload.trailer);

    const validate = schema.validate(payload).value;

    const anime = await prisma.animes.create({ data: validate });

    return anime;
  };

  static getAllAnimes = async () => {
    const animes = await prisma.animes.findMany();

    sortName(animes);

    return animes;
  };

  static getAnimeByGuid = async (guid) => {
    const anime = await prisma.animes.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!anime) throw createError.NotFound("ANIME_NOT_FOUND");

    return anime;
  };

  static updateAnime = async (payload, guid) => {
    const anime = await prisma.animes.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!anime) throw createError.NotFound("ANIME_NOT_FOUND");

    if (payload.trailer) payload.trailer = trailer.split(payload.trailer);

    const validate = schema.validate(payload).value;

    const updateAnime = await prisma.animes.update({
      where: {
        guid: guid,
      },
      data: validate,
    });

    return updateAnime;
  };

  static deleteAnime = async (guid) => {
    const anime = await prisma.animes.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!anime) throw createError.NotFound("ANIME_NOT_FOUND");

    await prisma.animes.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = AnimeService;
