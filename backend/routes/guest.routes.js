const express = require("express");
const { handleGuestBookController } = require("../controller/guest.controller");


const router = express.Router();

// http://localhost:8000/book/addguest
router.post("/addguest", handleGuestBookController);

module.exports = router;