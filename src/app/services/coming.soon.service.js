const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const prisma = new PrismaClient();
const schema = require("../utils/schemas/videos");

class ComingSoonService {
  static createComingSoon = async (payload) => {
    const validate = schema.validate(payload).value;

    const split = validate.trailer.split("https://youtu.be/");

    if (split[0])
      return createError.UnprocessableEntity("Invalid trailer link");

    const trailer = `https://www.youtube.com/embed/${split[1]}`;

    const validateComingSoon = {
      ...validate,
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
    const validate = schema.validate(payload).value;
    
    let trailer;

    if (validate.trailer) {
      const split = validate.trailer.split("https://youtu.be/");

      if (split[0])
        return createError.UnprocessableEntity("Invalid trailer link");

      trailer = `https://www.youtube.com/embed/${split[1]}`;
    }

    const comingSoon = {
      ...validate,
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
