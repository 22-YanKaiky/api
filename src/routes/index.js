const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const upload = require('../app/utils/s3/s3');

const animes = require("./animes");
const zipcode = require("./zipcode");
const auth = require("./auth");
const movies = require("./movies");
const series = require("./series");
const users = require("./users");
const favorites = require("./favorites");
const comingSoon = require("./coming.soon");

router.get("/", (_, response) => response.status(200).json({ message: `© ${new Date().getUTCFullYear()}, Cinemovie` }));

router.use("/uploads", upload.single('file'), async (request, response) => {
  const file = request.file;

  response.send({
    location: file.location
  })
});

router.use("/auth", auth);
router.use("/animes", animes);
router.use("/zipcode", zipcode);
router.use("/movies", movies);
router.use("/series", series);
router.use("/users", users);
router.use("/favorites", favorites);
router.use("/coming-soon", comingSoon);

router.use(async (_, __, message) => message(createError.NotFound("Route not Found")));

router.use((error, _, response, __) => response.status(error.status || 500).json({ message: error.message }));

module.exports = router;
