const express = require("express");
const { 
    handleGuestBookController, 
    handleGuestListController, 
    handleGuestDeleteController, 
    handleGuestUpdateController, 
} = require("../controller/guest.controller");


const router = express.Router();

router.post("/addguest", handleGuestBookController);
router.get("/guestlists", handleGuestListController);
router.post("/deleteguest", handleGuestDeleteController);
router.put("/updateguest", handleGuestUpdateController);

module.exports = router;