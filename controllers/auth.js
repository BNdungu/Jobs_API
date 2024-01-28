const users = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res) => {
    const result = await users.create({ ...req.body})
    res.status(StatusCodes.CREATED).json({
        status: "success",
        results: result.length(),
        data: {
            result
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