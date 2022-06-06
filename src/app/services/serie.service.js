const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const sortName = require("../utils/functions/sort.name");
const trailer = require("../utils/functions/trailer");
const prisma = new PrismaClient();
const schema = require("../utils/schemas/series.animes.schema");

class SerieService {
  static createSerie = async (payload) => {
    payload.trailer = trailer.split(payload.trailer);

    const validate = schema.validate(payload).value;

    const serie = await prisma.series.create({ data: validate });

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

    if (!serie) throw createError.NotFound("SERIE_NOT_FOUND");

    return serie;
  };

  static updateSerie = async (payload, guid) => {
    const serie = await prisma.series.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!serie) throw createError.NotFound("SERIE_NOT_FOUND");

    if (payload.trailer) payload.trailer = trailer.split(payload.trailer);

    const validate = schema.validate(payload).value;

    const updateSerie = await prisma.series.update({
      where: {
        guid: guid,
      },
      data: validate,
    });

    return updateSerie;
  };

  static deleteSerie = async (guid) => {
    const serie = await prisma.series.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!serie) throw createError.NotFound("SERIE_NOT_FOUND");
    
    await prisma.series.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = SerieService;
