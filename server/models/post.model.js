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
    date: { type: Date, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        alias: 'owner'
    },
    like: {
        type: Number
    },
    comments: [{ body: String, date: Date }]
});


module.exports = Post = mongoose.model('posts', postSchema);
