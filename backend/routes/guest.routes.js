const express = require("express");
const { handleGuestBookController, handleGuestListController, handleGuestDeleteController } = require("../controller/guest.controller");


const router = express.Router();

router.post("/addguest", handleGuestBookController);
router.get("/guestlists", handleGuestListController);
router.post("/deleteguest", handleGuestDeleteController);

module.exports = router;