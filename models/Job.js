const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide a company name'],
        maxlength: 50
    },

    position: {
        type: String,
        required: [true, 'Please provide the job position'],
        maxlength: 50
    },

    status: {
        type: String,
        enum: ['Interveiw', 'Declined', 'Pending'],
        default: 'Pending'
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: [true, 'Please provide the user']
    }

},{timestamps: true})

module.exports = mongoose.model('Jobs', jobsSchema)