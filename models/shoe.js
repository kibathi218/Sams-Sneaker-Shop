const { Schema } = require('mongoose')

const Shoe = new Schema(
    {
        name: {type: String, required: true},
        img: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        brand_id: {type: Schema.Types.ObjectId, ref: 'brand_id'}
    },
    { timestamps: true }
)

module.exports = Shoe