const users = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const result = await users.create({ ...req.body})
    const token = await jwt.sign({userId: result._id, name: result.name}, 'JWT_secret', {expiresIn: '30d'})
    res.status(StatusCodes.CREATED).json({
        status: "success",
        results: result.length,
        data: {
            token
        }
    })
}

const login = (req, res) => {
    res.send('login user')
}

module.exports = {
    register,
    login
}