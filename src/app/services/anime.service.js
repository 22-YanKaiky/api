const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();

class AnimeService {
  static createAnime = async (payload) => {
    const split = payload.trailer.split("https://youtu.be/");

    if (split[0])
      return createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    const validateAnime = {
      ...payload,
      trailer: trailer,
    };

    const anime = await prisma.animes.create({ data: validateAnime });

    return anime;
  };

  static getAllAnimes = async () => {
    const animes = await prisma.animes.findMany();

    return animes;
  };

  static getAnimeByGuid = async (guid) => {
    const anime = await prisma.animes.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!anime) return createError.NotFound("Anime not found");

    return anime;
  };

  static updateAnime = async (payload, guid) => {
    let trailer;

    if (payload.trailer) {
      const split = payload.trailer.split("https://youtu.be/");

      if (split[0])
        return createError.UnprocessableEntity("Invalid trailer link");

      trailer = `https://www.youtube.com/embed/${split[1]}`;
    }

    const anime = {
      ...payload,
      trailer: trailer,
    };

    const updateAnime = await prisma.animes.update({
      where: {
        guid: guid,
      },
      data: anime,
    });

    return updateAnime;
  };

  static deleteAnime = async (guid) => {
    await prisma.animes.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = AnimeService;
