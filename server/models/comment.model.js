const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
    date: {
        type: Date
    }
});


module.exports = Comment = mongoose.model('comments', commentSchema);
