const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

users.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


users.methods.genToken = function () {
    return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_secret, {expiresIn: process.env.JWT_keepAlive})
}

module.exports = mongoose.model('Users', users)