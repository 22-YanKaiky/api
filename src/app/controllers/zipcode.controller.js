const { default: axios } = require("axios");

class ZipcodeController {
  static getValueZipcode = async (request, response, message) => {
    try {
      const zipcode = request.body.zipcode;

      const currentZipcode = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${zipcode}`
      );

      response.status(200).json(currentZipcode.data);
    } catch (error) {
      message(createError.BadRequest(error.statusCode, error.message));
    }
  };
}

module.exports = ZipcodeController;
