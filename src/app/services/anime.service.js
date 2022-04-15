const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();
const likeSchema = require("../utils/schemas/videosLike");
const schema = require("../utils/schemas/series.animes");

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

  static patchAnime = async (guid, user_guid, payload) => {
    const validate = likeSchema.validate(payload).value;

    const validateQuantity = await prisma.animes.findUnique({
      where: {
        guid: guid
      }
    });

    if (validate.like) {
      validate.dislike = false;
      validate.quantity_likes = validateQuantity.quantity_likes + 1;
    } else {
      validate.quantity_likes = validateQuantity.quantity_likes;
    }

    if (validate.dislike) {
      validate.like = false;
      validate.quantity_dislikes = validateQuantity.quantity_dislikes + 1;
    } else {
      validate.quantity_dislikes = validateQuantity.quantity_dislikes;
    }

    const patchAnime = await prisma.animes.updateMany({
      where: {
        guid: guid
      },
      data: validate
    })

    /**
     * Tabela de user_serie_likes
     */
    const data = {
      user_guid: user_guid,
      anime_guid: guid,
    }

    const arrayAnimes = await prisma.userAnimeLikes.findMany({
      where: {
        anime_guid: guid,
      }
    })

    const anime = arrayAnimes.filter((u) => u.user_guid === user_guid)[0];

    if (anime) {
      await prisma.userAnimeLikes.update({
        where: {
          guid: anime.guid,
        },
        data: data
      })
    } else {
      await prisma.userAnimeLikes.create({
        data: data
      })
    }

    return patchAnime;
  }

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
