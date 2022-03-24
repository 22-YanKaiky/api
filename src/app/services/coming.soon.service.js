const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();

class ComingSoonService {
  static createComingSoon = async (payload) => {
    const split = payload.trailer.split("https://youtu.be/");

    if (split[0])
      return createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    const validateComingSoon = {
      ...payload,
      trailer: trailer,
    };

    const comingSoon = await prisma.comingSoon.create({
      data: validateComingSoon,
    });

    return comingSoon;
  };

  static getAllComingSoons = async () => {
    const comingSoons = await prisma.comingSoon.findMany();

    return comingSoons;
  };

  static getComingSoonByGuid = async (guid) => {
    const comingSoon = await prisma.comingSoon.findUnique({
      where: {
        guid: guid,
      },
    });

    if (!comingSoon) return createError.NotFound("ComingSoon not found");

    return comingSoon;
  };

  static updateComingSoon = async (payload, guid) => {
    let trailer;

    if (payload.trailer) {
      const split = payload.trailer.split("https://youtu.be/");

      if (split[0])
        return createError.UnprocessableEntity("Invalid trailer link");

      trailer = `https://www.youtube.com/embed/${split[1]}`;
    }

    const comingSoon = {
      ...payload,
      trailer: trailer,
    };

    const updateComingSoon = await prisma.comingSoon.update({
      where: {
        guid: guid,
      },
      data: comingSoon,
    });

    return updateComingSoon;
  };

  static deleteComingSoon = async (guid) => {
    await prisma.comingSoon.delete({
      where: {
        guid: guid,
      },
    });
  };
}

module.exports = ComingSoonService;
