const mongoose = require('mongoose');

const surveySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true
    }
});

module.exports = Survey = mongoose.model('surveys', surveySchema);
