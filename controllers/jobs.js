const {StatusCodes} = require('http-status-codes')
const jobs = require('../models/Job')

const getAllJobs = async (req, res) => {
    const result = await jobs.find({createdBy: req.user.userID}).sort('createdAt')    
    res.status(StatusCodes.OK).json({
        status: 'success',
        results: result.length,
        result
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

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userID
    const job = await jobs.create(req.body)
    res.status(StatusCodes.CREATED).json({
        status: 'success',
        job
    })
}

module.exports = {
    getAllJobs,
    getJob,
    updateJob,
    deleteJob,
    createJob
}