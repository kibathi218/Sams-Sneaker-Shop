const mongoose = require('mongoose')
// require('dotenv').config()

// let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/SamsSneakerDatabase'


var uri = 'mongodb+srv://skibathi:Brookside218$@cluster0.vf7ck.mongodb.net/SamsSneakerDatabase ?retryWrites=true&w=majority'

mongoose
    .connect(uri)
    .then(() => {
        console.log('successfully connected to MongoDB');
    })
    .catch((e) => {
        console.log('Connection error', e.message);
    })

    mongoose.set('debug', true)

    const db = mongoose.connection

    module.exports = db