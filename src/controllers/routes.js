const express = require("express");
const router = express.Router();

/**
 * @default Route
 */
router.get('/', (_, res) => res.send('Home Page Sucess'))

module.exports = router;
