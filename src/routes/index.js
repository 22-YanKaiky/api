const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const animes = require("./animes");
const auth = require("./auth");
const comingSoon = require("./coming.soon");
const movies = require("./movies");
const series = require("./series");
const users = require("./users");

router.get("/", (_, response) => response.status(200).json({ message: `© ${new Date().getUTCFullYear()}, Cinemovie` }));

router.use("/auth", auth);
router.use("/animes", animes);
router.use("/coming-soon", comingSoon);
router.use("/movies", movies);
router.use("/series", series);
router.use("/users", users);

router.use(async (_, __, message) => message(createError.NotFound("ROUTE_NOT_FOUND")));

router.use((error, _, response, __) => response.status(error.status || 500).json({ message: error.message }));

module.exports = router;
