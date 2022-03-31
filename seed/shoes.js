const db = require('../db')
const { Shoe, Brand } = require('../models/shoe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const nike = await Brand.find({name: 'Nike'})
    const jordan = await Brand.find({name: 'Jordan'})
    const adidas = await Brand.find({name: 'Adidas'})
    const asics = await Brand.find({name: 'Asics'})
    
    



    const shoes = [
        { 
            name: 'Jordan Retro 4 Taupe Haze', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/750/TEMPLATE/254034/1.jpg',
            brand_id: jordan[0]._id
        },

        { 
            name: 'Nike Air Force ONe', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/TEMPLATE/251353/1.jpg',
            brand_id: nike[0]._id
        },

        { 
            name: 'Nike Vapormax Plus', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/2200/TEMPLATE/150652/1.jpg',
            brand_id: nike[0]._id
        },

        { 
            name: 'Nike LD Waffle Sacai', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/750/TEMPLATE/137804/1.jpg',
            brand_id: nike[0]._id
        },

        { 
            name: 'Jordan Retro 14 Ferrari', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/750/TEMPLATE/011994/1.jpg',
            brand_id: jordan[0]._id
        },
        { 
            name: 'Adidas Superstar Core Black White', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/750/TEMPLATE/166775/1.jpg',
            brand_id: adidas[0]._id
        },
        { 
            name: 'Asics Gel Lyte 3 OG ', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/750/TEMPLATE/278375/1.jpg',
            brand_id: asics[0]._id
        },
        { 
            name: 'Nike Patta X Air Max 1', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/750/TEMPLATE/283231/1.jpg',
            brand_id: nike[0]._id
        },
        { 
            name: 'Jordan Retro 1 Dark Mocha', 
            price: 10, 
            description: '', 
            image: 'https://cdn.flightclub.com/2200/TEMPLATE/162310/1.jpg',
            brand_id: jordan[0]._id
        }
    
    
    ]

    await Shoe.insertMany(shoes)
    console.log("Created Shoes");

    
    
}

const run = async () => {
    await main()
    db.close()
}

run()