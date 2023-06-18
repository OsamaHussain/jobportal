const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },

});
const jobSchemaModel = mongoose.model('jobs', jobSchema);
module.exports = jobSchemaModel;