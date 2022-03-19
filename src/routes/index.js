const express = require("express");
const router = express.Router();

router.get("", (_, response) => response.status(200).json({
  message: "© 2022 Cinemovie"
}));

module.exports = router;
