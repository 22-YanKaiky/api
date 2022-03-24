const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const ZipcodeController = require("../app/controllers/zipcode.controller");

const router = express.Router();

router.get('/', auth, ZipcodeController.getValueZipcode)

module.exports = router;
