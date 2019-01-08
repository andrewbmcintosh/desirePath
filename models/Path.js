const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Path = new Schema({
    name: String,
    destination: String,
    startingPoint: String,
    description: String,
    stops: String,
    // ^^^^^^  need to change stops to the documents for the spcific stops
    loggedBy: String
    // value: Number, ** commented out to figure out how number works 
    // ^^^^^^ need to figure out a way to increase value with clicks

});

module.exports = mongoose.model("Path", Path)