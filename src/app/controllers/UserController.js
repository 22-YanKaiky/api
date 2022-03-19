const { PrismaClient } = require("@prisma/client");
const UserService = require("../services/UserService");
const prisma = new PrismaClient();

class UserController {
  static createUser = async (request, response) => {
    try {
      const payload = ({
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
      } = request.body);

      const user = await UserService.createUser(payload);

      response.status(201).json(user);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getAllUsers = async (_, response) => {
    try {
      const users = await UserService.getAllUsers();

      response.status(200).json(users);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static getUserByGuid = async (request, response) => {
    try {
      const guid = request.params.guid;

      const user = await UserService.getUserByGuid(guid);

      response.status(200).json(user);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static updateUser = async (request, response) => {
    try {
      const guid = request.params.guid;

      const payload = {
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

      const updateUser = await UserService.updateUser(payload, guid);

      response.status(200).json(updateUser);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static deleteUser = async (request, response) => {
    try {
      const guid = request.params.guid;

      await UserService.deleteUser(guid);

      response.status(200).json({ message: "Successfully deleted" });
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };
}

module.exports = UserController;
