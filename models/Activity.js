const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Activity = new Schema({
    name: String,
    img: String,
    address: String,
    city: String,
    state: String,
    type: String,
    description: String,
});

module.exports = mongoose.model("Activity", Activity)