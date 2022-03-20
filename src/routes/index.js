const express = require("express");
const router = express.Router();

const animes = require("./animes");
const ceps = require("./ceps");
const auth = require("./auth");
const movies = require("./movies");
const series = require("./series");
const users = require("./users");
const comingSoon = require("./coming.soon");

router.get("/", (_, response) =>
  response.status(200).json({
    message: "© 2022 Cinemovie",
  })
);

router.use("/auth", auth);
router.use("/animes", animes);
router.use("/ceps", ceps);
router.use("/movies", movies);
router.use("/series", series);
router.use("/users", users);
router.use("/coming-soon", comingSoon);

router.use(async (_, response) => {
  response.status(404).json({ status: 404, statusText: "Route not Found" });
});

router.use((error, _, res, __) => {
  res.status(error.status || 500).json({
    message: error.message,
  });
});

module.exports = router;
