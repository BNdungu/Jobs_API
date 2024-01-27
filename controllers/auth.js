const register = (req, res) => {
    res.send('Register user')
}

const login = (req, res) => {
    res.send('login user')
}

module.exports = {
    register,
    login
}