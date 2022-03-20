const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const UserController = require("../app/controllers/user.controller");

const router = express.Router();

router.get("/", auth, UserController.getAllUsers);

router.post("/", UserController.createUser);

router.get("/:guid", auth, UserController.getUserByGuid);

router.put("/:guid", auth, UserController.updateUser);

router.delete("/:guid", auth, UserController.deleteUser);

module.exports = router;
