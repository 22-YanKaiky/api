const express = require("express");

const router = express.Router();

router.get("/", (_, res) => res.send({ message: "Series" }));

module.exports = router;
