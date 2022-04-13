const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const AnimeController = require("../app/controllers/anime.controller");

const router = express.Router();

router.post("/", auth, AnimeController.createAnime);

router.get("/", auth, AnimeController.getAllAnimes);

router.get("/:guid", auth, AnimeController.getAnimeByGuid);

router.patch("/:guid", auth, AnimeController.patchAnime);

router.put("/:guid", auth, AnimeController.updateAnime);

router.delete("/:guid", auth, AnimeController.deleteAnime);

module.exports = router;
