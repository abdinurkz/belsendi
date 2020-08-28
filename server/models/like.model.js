const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    count: {
        type: Number
    }
});

module.exports = Like = mongoose.model('likes', likeSchema);
