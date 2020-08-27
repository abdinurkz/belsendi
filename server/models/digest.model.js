const mongoose = require('mongoose');

const digestSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});


module.exports = Digest = mongoose.model('digests', digestSchema);
