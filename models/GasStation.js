const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const GasStation = new Schema({
    name: String,
    img: String,
    address: String,
    city: String,
    state: String,
    foodOptions: String,
    description: String,
});

module.exports = mongoose.model("GasStation", GasStation)