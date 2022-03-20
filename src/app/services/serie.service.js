const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SerieService {
  static createSerie = async (payload) => {
    let trailer;

    payload.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        payload.trailer.split("/")[3]
      }`);

    const validateSerie = {
      ...payload,
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

    return serie;
  };

  static updateSerie = async (payload, guid) => {
    let trailer;

    payload.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        payload.trailer.split("/")[3]
      }`);

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
