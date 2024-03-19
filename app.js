const express = require('express')

const place = require('./router/place')

const user = require('./router/user-routes')

const bodyParser = require('body-parser')


const app = express()


    app.use(bodyParser.json())

    app.use('/api/places', place)
    app.use('/api/users', user)
    app.use(place)

app.listen(5000);