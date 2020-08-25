const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date.now()
    }
});


module.exports = Post = mongoose.model('posts', postSchema);
