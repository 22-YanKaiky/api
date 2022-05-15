const createError = require("http-errors");
const UserService = require("../services/user.service");

class UserController {
  static createUser = async (request, response, message) => {
    try {
      const payload = {
        name: request.body.name,
        last_name: request.body.last_name,
        email: request.body.email,
        phone: request.body.phone,
        birthday: request.body.birthday,
        password: request.body.password,
        isAdmin: request.body.isAdmin,
        genre: request.body.genre,
        image_url: request.file.location,
        country: request.body.country,
        zipcode: request.body.zipcode,
        house_number: request.body.house_number,
      };

      const user = await UserService.createUser(payload);

      response.status(201).json(user);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getAllUsers = async (_, response, message) => {
    try {
      const users = await UserService.getAllUsers();

      response.status(200).json(users);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static getUserByGuid = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const user = await UserService.getUserByGuid(guid);

      response.status(200).json(user);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static updateUser = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      const payload = {
        name: request.body.name,
        last_name: request.body.last_name,
        email: request.body.email,
        phone: request.body.phone,
        birthday: request.body.birthday,
        password: request.body.password,
        isAdmin: request.body.isAdmin,
        genre: request.body.genre,
        image_url: request.file ? request.file.location : request.body.image_url,
        country: request.body.country,
        zipcode: request.body.zipcode,
        house_number: request.body.house_number,
      };

      const user = await UserService.updateUser(payload, guid);

      response.status(200).json(user);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };

  static deleteUser = async (request, response, message) => {
    try {
      const guid = request.params.guid;

      await UserService.deleteUser(guid);

      response.status(200).json({ message: "Successful deleted" });
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = UserController;
