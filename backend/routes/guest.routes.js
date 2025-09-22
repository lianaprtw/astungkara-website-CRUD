const express = require("express");
const { handleGuestBookController, handleGuestListController } = require("../controller/guest.controller");


const router = express.Router();

// http://localhost:8000/book/addguest
router.post("/addguest", handleGuestBookController);
router.get("/guestlists", handleGuestListController);

module.exports = router;