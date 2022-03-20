const AuthService = require("../services/auth.service");
const createError = require("http-errors");

class authController {
  static login = async (request, response, next) => {
    try {
      const payload = {
        email: request.body.email,
        password: request.body.password,
      };

      const access = await AuthService.login(payload);

      response.status(200).json({
        status: true,
        message: "Account login successful",
        data: access,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = authController;
