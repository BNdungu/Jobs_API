const express = require('express')
const router = express.Router()

const {getAllJobs,getJob,createJob,updateJob,deleteJob} =require('../controllers/jobs')

router.route('getAllJobs').get(getAllJobs)
router.route('/getJob').get(getJob)
router.route('/createJob').post(createJob)
router.route('/deleteJob').delete(deleteJob)
router.route('/updateJob').patch(updateJob)

module.exports = router