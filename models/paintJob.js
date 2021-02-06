const mongoose = require("mongoose")
const Schema = mongoose.Schema

const paintSchema = new Schema({
    paintJob: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    isAdmin: {
        boolean: false,
    }
})
module.exports = mongoose.model("Paint", paintSchema)