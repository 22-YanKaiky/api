const jwt = require("jsonwebtoken");
require("dotenv").config();
const createError = require("http-errors");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

module.exports = {
  signAccessToken(payload) {
    console.log('signAccessToken')
    
    return new Promise((resolve, reject) => {
      jwt.sign({ payload }, accessTokenSecret, {}, (error, token) => {
        if (error) reject(createError.InternalServerError());

        resolve(token);
      });
    });
  },

  verifyAccessToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, accessTokenSecret, (error, payload) => {
        if (err) {
          const message =
            error.name == "JsonWebTokenError" ? "Unauthorized" : error.message;

          return reject(createError.Unauthorized(message));
        }

        resolve(payload);
      });
    });
  },
};
