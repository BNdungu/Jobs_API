const users = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')
const {BadRequestError,UnauthenticatedError} = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const result = await users.create({ ...req.body})
    console.log(result.genToken())
    const token = result.genToken()
    res.status(StatusCodes.CREATED).json({
        status: "success",
        users: {
            name: result.name
        },
        data: {
            token
        }
    })
}

const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please Provide all Login Credentials')
    }

    const user = await users.findOne({email})

    const isPasswordCorrect = await user.comparePassword(password)
    if (!user || !isPasswordCorrect ) {
        throw new UnauthenticatedError('User does not exist')
    }

    const token = user.genToken()

    res.status(StatusCodes.OK).json({
        status: 'success',
        user: {
            name: user.name
        },
        token
    })

}

module.exports = {
    register,
    login
}