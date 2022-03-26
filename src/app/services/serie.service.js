const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();
const schema = require("../utils/schemas/videos");

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

  static updateSerie = async (payload, guid) => {
    const validate = schema.validate(payload).value;

    let trailer;

    if (validate.trailer) {
      const split = validate.trailer.split("https://youtu.be/");

      if (split[0])
        return createError.UnprocessableEntity("Invalid trailer link");

      trailer = `https://www.youtube.com/embed/${split[1]}`;
    }

    const serie = {
      ...validate,
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
