const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    variants: {
        type: String,
        required: true
    },
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'surveys',
        required: true
    }
});

module.exports = Question = mongoose.model('questions', questionSchema);
