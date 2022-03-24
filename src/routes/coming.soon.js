const express = require("express");
const auth = require("../app/middlewares/auth.middlewares");
const ComingSoonController = require("../app/controllers/coming.soon.controller");

const router = express.Router();

router.post("/", auth, ComingSoonController.createComingSoon);

router.get("/", auth, ComingSoonController.getAllComingSoons);

router.get("/:guid", auth, ComingSoonController.getComingSoonByGuid);

router.put("/:guid", auth, ComingSoonController.updateComingSoon);

router.delete("/:guid", auth, ComingSoonController.deleteComingSoon);

module.exports = router;
