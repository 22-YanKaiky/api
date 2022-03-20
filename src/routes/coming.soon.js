const express = require("express");

const router = express.Router();

router.get("/", (_, res) => res.send({ message: "Em Breve" }));

module.exports = router;
