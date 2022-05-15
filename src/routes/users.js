const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const upload = require('../app/utils/s3/s3');
const UserController = require("../app/controllers/user.controller");

const router = express.Router();

router.get("/", auth, UserController.getAllUsers);

router.post("/", upload.single('image_url'), UserController.createUser);

router.get("/:guid", auth, UserController.getUserByGuid);

router.put("/:guid", auth, upload.single('image_url'), UserController.updateUser);

router.delete("/:guid", auth, UserController.deleteUser);

module.exports = router;
