const mongoose = require("mongoose");
require('dotenv').config();

var mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/hotelbooking'

mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose