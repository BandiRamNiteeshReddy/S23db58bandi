const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
House_address: String,
House_colour: String,
House_capacity: Number
})
module.exports = mongoose.model("house",houseSchema)