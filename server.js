// const express = require('express');
// const c


// app.use(express.static(`${__dirname}/client/build`))    ADD IN MIDDLEWARE

// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)  BEFORE APP.LISTEN
//    }) 

const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const db = require('./db');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(bodyParser.json());


app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))