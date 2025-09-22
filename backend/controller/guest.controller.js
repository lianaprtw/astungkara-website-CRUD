const {Guest} = require("../model/guest.model");

const handleGuestBookController = async (req, res) => {
    try {
        const body = req.body;

        if(
            !body.GuestName || 
            !body.Address || 
            !body.Phone || 
            !body.Message
        ){
            return res
            .status(400)
            .json({Message: "All field's are required", Success: false});
        }

        const guestAdd = await Guest.insertOne(body);

        if(guestAdd){
            return res
            .status(201)
            .json({
                Message: "Data created successfully!", 
                Success: true, 
                Id:guestAdd?._id 
            });
        }

        console.log("guestAdd", guestAdd);
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false});
    }
};

const handleGuestListController = async ( req, res) => {
    try {
        const guestList = await Guest.find({});
        return res
            .status(200)
            .json({
                Message: "All Guest fetched successfully",
                Success: true, 
                TotalCount: guestList.length,
                GuestList: guestList,
            });
    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false})
    }
};

const handleGuestDeleteController = async (req, res) => {
    const body = req.body;
    try {
        const deleted = await Guest.deleteOne({_id: body.Id});
        if (deleted.acknowledged) {
            return res.json({
                Message: "Guest deleted successfully!",
                Success: true,
            });
        }
    }   catch (error) {
        return res.status(400).json({ Message: error.message, Success: false})

    }
};

const handleGuestUpdateController  = async (req, res) => {
    try {
        const body = req.body;

        const updating = await Guest.updateOne({_id: body?._id }, {$set: body});

        if (updating?.acknowledged) {
            return res.json({
                Message: "Guest updated successfully!",
                Success: true, 
            });
        }
    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false });
    }
};

module.exports = {
    handleGuestBookController, 
    handleGuestListController, 
    handleGuestDeleteController,
    handleGuestUpdateController
};