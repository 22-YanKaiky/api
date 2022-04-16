const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const sortName = require("../utils/functions/sort.name");
const prisma = new PrismaClient();
const quantityLikeSchema = require("../utils/schemas/quantity.like.favorite.schema");
const schema = require("../utils/schemas/series.animes.schema");

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

    sortName(animes);
    
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
    const validate = quantityLikeSchema.validate(payload).value;

    const anime = await prisma.animes.findUnique({
      where: {
        guid: guid
      }
    });

    if (validate.like) {
      validate.dislike = false;
      anime.quantity_likes = anime.quantity_likes + 1;
    }

    if (validate.dislike) {
      validate.like = false;
      anime.quantity_dislikes = anime.quantity_dislikes + 1;
    }

    const patchAnime = await prisma.animes.update({
      where: {
        guid: guid
      },
      data: anime
    })

    /**
     * Tabela de user_anime_likes
     */
    const data = {
      user_guid: user_guid,
      anime_guid: guid,
      like: validate.like,
      dislike: validate.dislike,
      favorite: validate.favorite
    }

    const arrayAnimes = await prisma.userAnimeLikes.findMany({
      where: {
        anime_guid: guid,
      }
    })

    const userAnime = arrayAnimes.filter((u) => u.user_guid === user_guid)[0];

    if (userAnime) {
      await prisma.userAnimeLikes.update({
        where: {
          guid: userAnime.guid,
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
