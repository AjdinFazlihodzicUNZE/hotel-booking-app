const express = require("express");
const router = express.Router();
const Booking = require("../models/booking")
const Room = require("../models/room")

router.post("/bookroom", async (req, res) => {
    const {
        room,
        roomid,    
        userid,
        date,
        rentperday
    } = req.body;

    try {
        const newbooking = new Booking({
            room,
            roomid,
            userid,
            date,
            rentperday
        });

        const booking = await newbooking.save();

        const roomtemp = await Room.findOne({_id : roomid})

        roomtemp.currentbookings.push({
            bookingid: booking._id ,
            date : date,
            userid : userid,
            status : booking.status,
        });

        await roomtemp.save();

        res.status(200).json({ message: "Booking successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Booking failed", error });
    }
});
module.exports = router;