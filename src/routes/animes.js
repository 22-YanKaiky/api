const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const upload = require('../app/utils/s3/s3');
const AnimeController = require("../app/controllers/anime.controller");

const router = express.Router();

router.post("/", auth, upload.single('folder'), AnimeController.createAnime);

router.get("/", auth, AnimeController.getAllAnimes);

router.get("/:guid", auth, AnimeController.getAnimeByGuid);

router.put("/:guid", auth, upload.single('folder'), AnimeController.updateAnime);

router.delete("/:guid", auth, AnimeController.deleteAnime);

module.exports = router;
