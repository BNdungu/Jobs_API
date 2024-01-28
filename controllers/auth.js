const users = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError} = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const {name, email, password} = req.body

    const salt = await bcrypt.genSalt(10)
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword);

    const tempUser = { name, email, password: hashedPassword}

    const result = await users.create({ ...tempUser})
    res.status(StatusCodes.CREATED).json({
        status: "success",
        results: result.length,
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