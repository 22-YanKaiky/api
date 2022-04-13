const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const SerieController = require("../app/controllers/serie.controller");

const router = express.Router();

router.post("/", auth, SerieController.createSerie);

router.get("/", auth, SerieController.getAllSeries);

router.get("/:guid", auth, SerieController.getSerieByGuid);

router.patch("/:guid", auth, SerieController.patchSerie);

router.put("/:guid", auth, SerieController.updateSerie);

router.delete("/:guid", auth, SerieController.deleteSerie);

module.exports = router;
