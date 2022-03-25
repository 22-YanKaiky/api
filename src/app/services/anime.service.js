const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();
const schema = require("../utils/schemas/videos");

class AnimeService {
  static createAnime = async (payload) => {
    const validate = schema.validate(payload).value;

    const split = validate.trailer.split("https://youtu.be/");

    if (split[0])
      return createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    const validateAnime = {
      ...validate,
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
    const validate = schema.validate(payload).value;
    
    let trailer;

    if (validate.trailer) {
      const split = validate.trailer.split("https://youtu.be/");

      if (split[0])
        return createError.UnprocessableEntity("Invalid trailer link");

      trailer = `https://www.youtube.com/embed/${split[1]}`;
    }

    const anime = {
      ...validate,
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
