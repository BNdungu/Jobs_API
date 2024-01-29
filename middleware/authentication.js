const user = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')


const auth = async (req, res, next) => {
    const {authorization} = req.headers

    if (!authorization || !authorization.startsWith('Bearer ')){
        throw new UnauthenticatedError('Token not provided')
    }

    const token = authorization.split(' ')[1]
    try {
        const payload = await jwt.verify(token, process.env.JWT_secret)
        req.user = {userID:payload.userId,name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError(' Authentication Failed')
    }
}

module.exports = auth