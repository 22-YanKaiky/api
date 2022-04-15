const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const MovieController = require("../app/controllers/movie.controller");

const router = express.Router();

router.get("/", auth, MovieController.getAllMovies);

router.post("/", auth, MovieController.createMovie);

router.get("/:guid", auth, MovieController.getMovieByGuid);

router.patch("/:guid/:user_guid", auth, MovieController.patchMovie);

router.put("/:guid", auth, MovieController.updateMovie);

router.delete("/:guid", auth, MovieController.deleteMovie);

module.exports = router;
