const AuthService = require("../services/auth.service");

class AuthController {
  static register = async (request, response) => {
    try {
      const payload = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        profile: request.body.profile,
        genre: request.body.genre,
      };

      const user = await AuthService.register(payload);

      response.status(201).json(user);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };

  static login = async (request, response) => {
    try {
      const payload = {
        email: request.body.email,
        password: request.body.password,
      };

      const login = await AuthService.login(payload);

      response.status(200).json(login);
    } catch (error) {
      response.status(400).json({
        message: error,
      });
    }
  };
}

module.exports = AuthController;
