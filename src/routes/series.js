const express = require("express");
const upload = require('../app/utils/s3/s3');
const auth = require("../app/middlewares/auth.middlewares");
const SerieController = require("../app/controllers/serie.controller");

const router = express.Router();

router.post("/", auth, upload.single('folder'), SerieController.createSerie);

router.get("/", auth, SerieController.getAllSeries);

router.get("/:guid", auth, SerieController.getSerieByGuid);

router.put("/:guid", auth, upload.single('folder'), SerieController.updateSerie);

router.delete("/:guid", auth, SerieController.deleteSerie);

module.exports = router;
