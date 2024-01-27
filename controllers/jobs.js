const getAllJobs = (req, res) => {
    res.send('Get all Jobs')
}

const getJob = (req, res) => {
    res.send('get Job')
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