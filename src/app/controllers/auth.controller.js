const createError = require("http-errors");
const AuthService = require("../services/auth.service");

class AuthController {
  static login = async (request, response, message) => {
    try {
      const payload = {
        email: request.body.email,
        password: request.body.password,
      };

      const access = await AuthService.login(payload);

      response.status(200).json(access);
    } catch (error) {
      message(createError(error.statusCode, error.message));
    }
  };
}

module.exports = AuthController;
