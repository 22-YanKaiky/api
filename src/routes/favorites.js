const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const FavoritesController = require("../app/controllers/favorites.controller");

const router = express.Router();

router.get("/:user_guid", auth, FavoritesController.getFavorites);

module.exports = router;
