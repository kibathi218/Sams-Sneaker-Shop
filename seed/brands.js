const db = require('../db')
const { Brand } = require('../models/brand')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const brands = [
        {
            name: 'Nike',
            url: 'https://www.nike.com'
        },

        {
            name: 'Adidas',
            url: 'https://www.adidas.com/us'
        },

        {
            name: 'Jordan',
            url: 'https://www.nike.com/jordan'
        },

        {
            name: 'Asics',
            url: 'https://www.asics.com/us/en-us/'
        }


    ]

    await db.collection("Brands").insertMany(brands)
    console.log("Created products!");

    
    
}

const run = async () => {
    await main()
    db.close()
}

run()