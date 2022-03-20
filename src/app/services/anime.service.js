const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AnimeService {
  static createAnime = async (payload) => {
    let trailer;

    payload.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        payload.trailer.split("/")[3]
      }`);

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

    return anime;
  };

  static updateAnime = async (payload, guid) => {
    let trailer;

    payload.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        payload.trailer.split("/")[3]
      }`);

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
