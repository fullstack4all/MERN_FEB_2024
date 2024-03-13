const express = require('express')

const place = require('./router/place')
const bodyParser = require('body-parser')


const app = express()
    app.use(bodyParser.json())
    app.use(place)

app.listen(5000)