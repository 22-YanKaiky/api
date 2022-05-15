const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const sortName = require("../utils/functions/sort.name");
const prisma = new PrismaClient();
const quantityLikeSchema = require('../utils/schemas/quantity.like.favorite.schema');
const schema = require("../utils/schemas/series.animes.schema");

class SerieService {
  static createSerie = async (payload) => {
    const validate = schema.validate(payload).value;

    const split = validate.trailer.split("https://youtu.be/");

    if (split[0])
      return createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    const validateSerie = {
      ...validate,
      trailer: trailer,
    };

    const serie = await prisma.series.create({ data: validateSerie });

    return serie;
  };

  static getAllSeries = async () => {
    const series = await prisma.series.findMany();

    sortName(series);
    
    return series;
  };

  static getSerieByGuid = async (guid) => {
    const serie = await prisma.series.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!serie) return createError.NotFound("Serie not found");

    return serie;
  };

  static patchSerie = async (guid, user_guid, payload) => {
    const validate = quantityLikeSchema.validate(payload).value;

    const serie = await prisma.series.findUnique({
      where: {
        guid: guid
      }
    });

    if (validate.like) {
      validate.dislike = false;
      serie.quantity_likes = serie.quantity_likes + 1;
    }

    if (validate.dislike) {
      validate.like = false;
      serie.quantity_dislikes = serie.quantity_dislikes + 1;
    }

    const patchSerie = await prisma.series.update({
      where: {
        guid: guid
      },
      data: serie
    })

    /**
    * Tabela de user_serie_likes
    */
    const data = {
      user_guid: user_guid,
      serie_guid: guid,
      like: validate.like,
      dislike: validate.dislike,
      favorite: validate.favorite
    }

    const arraySeries = await prisma.userSerieLikes.findMany({
      where: {
        serie_guid: guid,
      }
    })

    const userSerie = arraySeries.filter((u) => u.user_guid === user_guid)[0];

    if (userSerie) {
      await prisma.userSerieLikes.update({
        where: {
          guid: userSerie.guid,
        },
        data: data
      })
    } else {
      await prisma.userSerieLikes.create({
        data: data
      })
    }

    return patchSerie;
  }

  static updateSerie = async (payload, guid) => {
    let trailer;

    if (payload.trailer) {
      const split = payload.trailer.split("https://youtu.be/");

      if (split[0])
        return createError.UnprocessableEntity("Invalid trailer link");

      trailer = `https://www.youtube.com/embed/${split[1]}`;
    }

    const serie = {
      ...payload,
      trailer: trailer,
    };

    const updateSerie = await prisma.series.update({
      where: {
        guid: guid,
      },
      data: serie,
    });

    return updateSerie;
  };

  static deleteSerie = async (guid) => {
    await prisma.series.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = SerieService;
