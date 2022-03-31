const { Schema } = require('mongoose')

const Brand = new Schema (
    {
        name: {type: String, required: true},
        url: {type: String, required: true}

    },
    { timestamps: true }
)