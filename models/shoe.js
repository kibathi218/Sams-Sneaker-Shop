const { Schema } = require('mongoose')

const Shoe = new Schema(
    {
        name: {type: String, required: true},
        img: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        brand: {type: Schema.Types.ObjectId, ref: 'brands'}
    },
    { timestamps: true }
)

module.exports = Shoe