const { Schema } = require('mongoose')

const Shoe = new Schema(
    {
        name: {type: String, required: true},
        img: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true}
    },
    { timestamps: true }
)