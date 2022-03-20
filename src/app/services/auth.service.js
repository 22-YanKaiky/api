const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

class AuthService {
  static async register(payload) {
    payload.password = bcrypt.hashSync(payload.password, 8);

    let user = prisma.user.create({
      data: payload,
    });

    payload.accessToken = await jwt.signAccessToken(user);

    return payload;
  }

  static login = async (payload) => {
    const { email, password } = payload;

    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) throw createError.NotFound("User not registered");

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword)
      throw createError.Unauthorized("Email address or password not valid");

    delete user.password;

    const accessToken = jwt.signAccessToken(user);

    return { ...user, accessToken };
  };
}

module.exports = AuthService;
