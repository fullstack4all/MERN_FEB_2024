const express = require('express')

const mongoose = require('mongoose')

const place = require('./router/place')

const user = require('./router/user-routes')

const bodyParser = require('body-parser')


const app = express()



    app.use(bodyParser.json())

  

    app.use('/api/places', place)
    app.use('/api/users', user)
    app.use(place)

    mongoose.connect("mongodb+srv://fullstack4all:@cluster0.jtswj0p.mongodb.net/Database?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        app.listen(5000);
    }).catch(err =>{
        console.log(err);
    })

