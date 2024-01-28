const mongoose = require('mongoose')

const users = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },

    email: {
        type: String,
        required: [true, 'PLease provide your email'],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email']
    },

    password: {
        type: String,
        required: [true, 'Please provide your password']

    }
})

module.exports = mongoose.model('Users', users)