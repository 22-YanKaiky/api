const express = require("express");
const upload = require('../app/utils/s3/s3');
const auth = require("../app/middlewares/auth.middlewares");
const MovieController = require("../app/controllers/movie.controller");

const router = express.Router();

router.post("/", auth, upload.single('folder'), MovieController.createMovie);

router.get("/", auth, MovieController.getAllMovies);

router.get("/:guid", auth, MovieController.getMovieByGuid);

router.put("/:guid", auth, upload.single('folder'), MovieController.updateMovie);

router.delete("/:guid", auth, MovieController.deleteMovie);

module.exports = router;
