const express = require("express");
const router = express.Router();
const auth = require("../app/middlewares/auth.middlewares");
const UserController = require("../app/controllers/user.controller");

router.get("/", auth, UserController.getAllUsers);

router.post("/", UserController.createUser);

router.get("/:guid", auth, UserController.getUserByGuid);

router.put("/:guid", auth, UserController.updateUser);

router.delete("/:guid", auth, UserController.deleteUser);

module.exports = router;
