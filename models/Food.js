const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Food = new Schema({
    name: String,
    img: String,
    address: String,
    city: String,
    state: String,
    category: String,
    description: String,
});

module.exports = mongoose.model("Food", Food)