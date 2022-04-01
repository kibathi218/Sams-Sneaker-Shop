const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        name: {type: String, required: true},
        message: {type: String, required: true},
        rating: {type: Number, required: true},
        shoe: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = mongoose.model('reviews', Review)