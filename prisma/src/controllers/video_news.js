const express = require("express");

const router = express.Router();

router.get('', (_, res) => res.send('Video News'))

module.exports = router;
