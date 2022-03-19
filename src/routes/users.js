const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");

router.get("", UserController.getAllUsers);

router.post("", UserController.createUser);

router.get("/:guid", UserController.getUserByGuid);

router.put("/:guid", UserController.updateUser);

router.delete("/:guid", UserController.deleteUser);

module.exports = router;
