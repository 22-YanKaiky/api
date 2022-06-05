require("dotenv").config();
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const passwordHash = bcrypt.hashSync(process.env.USER_PASSWORD_SEEDER_DB, 8);

  const user = {
    name: "Yan Kaiky",
    last_name: "Augusto dos Santos",
    email: "yankaikys@gmail.com",
    password: passwordHash,
    admin: true,
    image_url: "https://www.github.com/22-YanKaiky.png",
  }

  await prisma.users.create({
    data: user,
  })
}

seed()
