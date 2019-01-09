const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Paths = new Schema({
    name: String,
    destinationAddress: String,
    destinationCity: String,
    destinationState: String,
    startingAddress: String,
    startingCity: String,
    startingState: String,
    description: String,
    stops: [],
    // ^^^^^^  need to change stops to the documents for the spcific stops
    loggedBy: String
    // value: Number, ** commented out to figure out how number works 
    // ^^^^^^ need to figure out a way to increase value with clicks

});

module.exports = mongoose.model("Paths", Paths)