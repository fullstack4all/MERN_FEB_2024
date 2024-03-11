const express = require('express')

const place = require('./router/place')

const app = express()

    app.use(place)

app.listen(5000)