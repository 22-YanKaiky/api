const express = require("express");
const router = express.Router();
const auth = require("../app/middlewares/auth.middlewares");
const MovieController = require("../app/controllers/movie.controller");

router.get("/", auth, MovieController.getAllMovies);

router.post("/", auth, MovieController.createMovie);

router.get("/:guid", auth, MovieController.getMovieByGuid);

router.put("/:guid", auth, MovieController.updateMovie);

router.delete("/:guid", auth, MovieController.deleteMovie);

module.exports = router;
