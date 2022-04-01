const db = require('../db')
const Review = require('../models/review')

db.on("error", console.error.bind(console, "MOngoDB connection error:"))

const main = async () => {
    const reviews = [
        {
            name: 'Joe Biden',
            message: "These go perfectly with my plane",
            rating: 5,
            shoe: 'Nike Air Force One'
        },

        {
            name: 'Oprah Winfrey',
            message: "I love these shoes so much that everyone at my next show gets a pair",
            rating: 5,
            shoe: "ASICS Gel-Lyte III"
        },

        {
            name: 'Will Smith',
            message: "I sent Chris Rock a pair of these as an apology gift and he still hasn't texted me back",
            rating: 2,
            shoe: "Jordan Retro 1 Dark Mocha"
        },

    ]

    await Review.insertMany(reviews)
    console.log("createed some reviews");
}

const run = async () => {
    await main()
    db.close()
}

run()