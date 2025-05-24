const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
    room : {
        type: String,required: true
    },
    roomid: {
        type: String,required: true
    },
    userid:{
        type: String,required: true
    },
    date:{
        type: String,required: true
    },
    rentperday:{
        type: Number, required: true
    },
    status:{
        type: String, required: true , default : 'booked'
    }
}, {
    timestamps : true,
})

const bookingmodel = mongoose.model('bookings', bookingSchema);
module.exports = bookingmodel