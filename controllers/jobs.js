const {StatusCodes} = require('http-status-codes')

const getAllJobs = (req, res) => {
    res.status(StatusCodes.OK).json({
        status: 'success',
        user: req.user
    })

}

const getJob = (req, res) => {
    res.send('Get JJob')
}
const updateJob = (req, res) => {
    res.send('update Job')
}

const deleteJob = (req, res) => {
    res.send('delete Job')
}

const createJob = (req, res) => {
    res.send('create Job')
}

module.exports = {
    getAllJobs,
    getJob,
    updateJob,
    deleteJob,
    createJob
}