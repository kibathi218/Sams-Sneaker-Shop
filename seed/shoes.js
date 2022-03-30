const db = require('../db')
const Food = require('../models/shoes')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const foods = [
        { name: 'Jordan Retro 4 Taupe Haze', price: 10, description: '', image: ''},
        { name: '', price: 10, description: '', image: ''},
        { name: '', price: 10, description: '', image: ''}
    ]

    await Food.inse
    
}

const run = async () => {
    await main()
    db.close()
}

run()