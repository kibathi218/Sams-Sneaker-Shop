const db = require('../db')
const { Brand, Shoe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const brand1 = await new Brand({
    name: 'Nike',
    url: 'https://www.nike.com'
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'Adidas',
    url: 'https://www.adidas.com/us'
  })
  brand2.save()

  const brand3 = await new Brand({
    name: 'Jordan',
    url: 'https://www.nike.com/jordan'
  })
  brand3.save()

  const brand4 = await new Brand({
    name: 'Asics',
    url: 'https://www.asics.com/us/en-us/'
  })
  brand4.save()

  

  const shoes = [
    {
      name: 'Jordan Retro 4 Taupe Haze',
      img: 'https://cdn.flightclub.com/750/TEMPLATE/254034/1.jpg',
      description: 'hey',
      price: '250',
      brand: brand3._id
    },
    {
      name: 'Nike Air Force One',
      img: 'https://cdn.flightclub.com/TEMPLATE/251353/1.jpg',
      description: 'hey',
      price: '1000',
      brand: brand1._id
    },
    {
      name: 'Nike Vapormax Plus',
      img: 'https://cdn.flightclub.com/2200/TEMPLATE/150652/1.jpg',
      description: 'hey',
      price: '499',
      brand: brand1._id
    },
    {
      name: 'Nike LD Waffle Sacai',
      img: 'https://cdn.flightclub.com/750/TEMPLATE/137804/1.jpg',
      description: 'hey',
      price: '3000',
      brand: brand1._id
    },
    {
      name: 'Jordan Retro 14 Ferrari',
      img: 'https://cdn.flightclub.com/750/TEMPLATE/011994/1.jpg',
      description: 'hey',
      price: '84',
      brand: brand3._id
    },
    {
      name: 'Adidas Superstar Core Black & White',
      img: 'https://cdn.flightclub.com/750/TEMPLATE/166775/1.jpg',
      description: 'hey',
      price: '675',
      brand: brand2._id
    },
    {
      name: 'Asics Gel Lyte 3 OG',
      img: 'https://cdn.flightclub.com/750/TEMPLATE/278375/1.jpg',
      description: 'hey',
      price: '17',
      brand: brand4._id
    },
    {
        name: 'Nike Patta X Air Max 1',
        img: 'https://cdn.flightclub.com/750/TEMPLATE/283231/1.jpg',
        description: 'hey',
        price: '17',
        brand: brand1._id
      },
      {
        name: 'Jordan Retro 1 Dark Mocha',
        img: 'https://cdn.flightclub.com/2200/TEMPLATE/162310/1.jpg',
        description: 'hey',
        price: '17',
        brand: brand3._id
      },

  ]

  await Shoe.insertMany(shoes)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()