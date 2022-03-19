const express = require("express");
const router = express.Router();

/**
 * @description Prisma
 */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("", async (_, response) => {
  try {
    const movies = await prisma.movies.findMany();

    response.status(200).json(movies);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.post("", async (request, response) => {
  try {
    const validateMovie = {
      name: request.body.name,
      link: request.body.link,
      genre: request.body.genre,
      time: request.body.time,
      year: request.body.year,
      direction: request.body.direction,
      synopsis: request.body.synopsis,
      folder: request.body.folder,
      trailer: request.body.trailer,
    };

    let trailer;

    validateMovie.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        validateMovie.trailer.split("/")[3]
      }`);

    const movie = {
      ...validateMovie,
      trailer: trailer,
    };

    const newMovie = await prisma.movies.create({ data: movie });

    response.status(201).json(newMovie);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.get("/:guid", async (request, response) => {
  try {
    const guid = request.params.guid;

    const movie = await prisma.movies.findUnique({
      where: {
        guid: guid,
      },
    });

    response.status(200).json(movie);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.put("/:guid", async (request, response) => {
  try {
    const guid = request.params.guid;

    const validateMovie = {
      name: request.body.name,
      link: request.body.link,
      genre: request.body.genre,
      time: request.body.time,
      year: request.body.year,
      direction: request.body.direction,
      synopsis: request.body.synopsis,
      folder: request.body.folder,
      trailer: request.body.trailer,
    };

    let trailer;

    validateMovie.trailer &&
      (trailer = `https://www.youtube.com/embed/${
        validateMovie.trailer.split("/")[3]
      }`);

    const movie = {
      ...validateMovie,
      trailer: trailer,
    };

    const updateMovie = await prisma.movies.update({
      where: {
        guid: guid,
      },
      data: movie,
    });

    response.status(200).json(updateMovie);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.delete("/:guid", async (request, response) => {
  try {
    const guid = request.params.guid;

    await prisma.movies.delete({
      where: {
        guid: guid,
      },
    });

    response.status(200).json({ message: "Successfully Deleted" })
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
