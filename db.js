const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://medinismic:medinsifra@cluster0.5fvtie1.mongodb.net/mern-rooms"

mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose