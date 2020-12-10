const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/new', (req, res) => {
    res.render( { currentUser: req.session.currentUser })
})

users.post('/music', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcyrpt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        console.log('user is created', createdUser)
        res.redirect('/music')
    })
})

model.exports = users