const {StatusCodes} = require('http-status-codes')
const jobs = require('../models/Job')
const {NotFoundError, BadRequestError} = require('../errors')

const getAllJobs = async (req, res) => {
    const result = await jobs.find({createdBy: req.user.userID}).sort('createdAt')    
    res.status(StatusCodes.OK).json({
        status: 'success',
        results: result.length,
        result
    })
}

const getJob = async (req, res) => {
    const {user:{userID},params: {id: jobsId}} = req

    const job = await jobs.findOne({
        _id:jobsId, createdBy: userID
    })

    if (!job){
        throw new NotFoundError(`Job of id ${jobsId} not found`)
    }

    res.status(StatusCodes.OK).json({
        status: 'success',
        job
    })
}
const updateJob = async (req, res) => {
    const {
        user: {userID},
        params: {id: jobId},
        body: {company, position}
    } = req

    if (company === '' || position === ''){
        throw new BadRequestError('Company and postion fields cannot be empty')
    }

    const job = await jobs.findOneAndUpdate({_id: jobId, createdBy: userID},req.body, {new: true, runValidators: true})

    if (!job){
        throw new NotFoundError(`Job of id ${jobId} not found`)
    }

    res.status(StatusCodes.OK).json({
        status: 'succcess',
        job
    })
}

const deleteJob = async (req, res) => {
    const {
        user: {userID},
        params: {id: jobId}
    } =req

    const job = await jobs.findOneAndDelete({
        _id: jobId,
        createdBy: userID
    })
    
    if (!job){
        throw new NotFoundError(`Job of id ${jobId} couldn't be found`)
    }

    res.status(StatusCodes.OK).send()
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