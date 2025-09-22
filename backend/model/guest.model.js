const mongoose = require("mongoose");

const guestSchema =  new mongoose.Schema({
    GuestName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
    PublishDate: {
        type: String,
    },
},
{ timestamps: true}
);

const Guest = mongoose.model("guest", guestSchema); 

module.exports = { Guest };