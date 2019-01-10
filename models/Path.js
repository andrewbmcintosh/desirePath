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
    activity: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    food: [{
        type: Schema.Types.ObjectId,
        ref: 'Food'
    }],
    loggedBy: String
    // value: Number, ** commented out to figure out how number works 
    // ^^^^^^ need to figure out a way to increase value with clicks

});

module.exports = mongoose.model("Paths", Paths)