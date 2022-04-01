// const express = require('express');
// const c


// app.use(express.static(`${__dirname}/client/build`))    ADD IN MIDDLEWARE

// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)  BEFORE APP.LISTEN
//    }) 

const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Shoe } = require('./models')

const app = express();

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/shoes', async (req, res) => {
    const shoes = await Shoe.find({})
    res.json(shoes)
  })

app.get('/shoes/:id', async (req, res) =>{
  try {
  const { id } = req.params
  const shoe = await Shoe.findById(id)
  if (!shoe) throw Error ('shoe not found')
  res.json(shoe)
  } catch (e) {
    console.log(e)
    res.send("shoe not found")
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})