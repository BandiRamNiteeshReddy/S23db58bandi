const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
House_address:{type: String, minlength:3},
House_colour: {type: String, required: true},
House_capacity: {type: Number, required: true}
})
module.exports = mongoose.model("house",houseSchema)