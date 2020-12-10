const bcrypt = require('bcrypt')
const { response } = require('express')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
    res.render({currentUser: req.session.currentUser })
})

sessions.post('/', (req, res) => {


    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if(err) {
            console.log(err)
            res.send('Oops, the database encountered a problem!')
        } else if (!foundUser) {
            res.send('Sorry, no user found.')
        } else {

            if (bcrypt.compareSync(req.body.password, foundUser.password)) {

            req.session.currentUser = foundUser

            res.redirect('/')

        } else {
            res.send('gibberish')

        }
        
        }
    })
})