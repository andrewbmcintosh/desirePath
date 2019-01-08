const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Scenery = new Schema({
    name: String,
    img: String,
    address: String,
    city: String,
    state: String,
    description: String,
});

module.exports = mongoose.model("Scenery", Scenery)