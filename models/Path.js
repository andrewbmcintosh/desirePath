const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Path = new Schema({
    Name: String,
    Destination: String,
    StartingPoint: String,
    Description: String,
    Stops: String,
    // ^^^^^^  need to change stops to the documents for the spcific stops
    LoggedBy: String,
    Value: Number,
    // ^^^^^^ need to figure out a way to increase value with clicks

});

module.exports = mongoose.model("Path", Path)