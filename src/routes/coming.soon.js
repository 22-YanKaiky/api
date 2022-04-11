const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const ComingSoonController = require("../app/controllers/coming.soon.controller");

const router = express.Router();

router.get("/", auth, ComingSoonController.getComingSoons);

module.exports = router;
