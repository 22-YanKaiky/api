const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

/**
 * @description Prisma
 */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("", async (_, response) => {
  try {
    const users = await prisma.users.findMany();

    response.status(200).json(users);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.post("", async (request, response) => {
  try {
    const validateUser = {
      name: request.body.name,
      last_name: request.body.last_name,
      email: request.body.email,
      phone: request.body.phone,
      password: request.body.password,
      profile: request.body.profile,
      genre: request.body.genre,
      image_url: request.body.image_url,
      country: request.body.country,
      cep: request.body.cep,
      house_number: request.body.house_number,
    };

    const cep = await axios.get(
      `https://brasilapi.com.br/api/cep/v1/${validateUser.cep}`
    );

    const user = {
      ...validateUser,
      state: cep.data.state,
      city: cep.data.city,
      neighborhood: cep.data.neighborhood,
      street: cep.data.street,
    };

    const newUser = await prisma.users.create({ data: user });

    response.status(201).json(newUser);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.get("/:guid", async (request, response) => {
  try {
    const guid = request.params.guid;

    const user = await prisma.users.findUnique({
      where: {
        guid: guid,
      },
    });

    response.status(200).json(user);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.put("/:guid", async (request, response) => {
  try {
    const guid = request.params.guid;

    const validateUser = {
      name: request.body.name,
      last_name: request.body.last_name,
      email: request.body.email,
      phone: request.body.phone,
      password: request.body.password,
      profile: request.body.profile,
      genre: request.body.genre,
      image_url: request.body.image_url,
      country: request.body.country,
      cep: request.body.cep,
      house_number: request.body.house_number,
    };

    const cep = await axios.get(
      `https://brasilapi.com.br/api/cep/v1/${validateUser.cep}`
    );

    const user = {
      ...validateUser,
      state: cep.data.state,
      city: cep.data.city,
      neighborhood: cep.data.neighborhood,
      street: cep.data.street,
    };

    const updateUser = await prisma.users.update({
      where: {
        guid: guid,
      },
      data: user,
    });

    response.status(200).json(updateUser);
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

router.delete("/:guid", async (request, response) => {
  try {
    const guid = request.params.guid;

    await prisma.users.delete({
      where: {
        guid: guid,
      },
    });

    response.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
