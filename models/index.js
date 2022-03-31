const mongoose = require('mongoose')
const ShoeSchema = require('./shoe')
const BrandSchema = require('./brand')

const Shoe = mongoose.model('Shoe', ShoeSchema)
const Brand = mongoose.model('Brand', BrandSchema)

module.exports = {
    Brand,
    Shoe
}