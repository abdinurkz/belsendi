const Post = require('../models/post.model');


const createPost = async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            image: req.file.path,
            description: req.body.description,
            user: req.user.id
        });
        res.status(201).json(post)
    } catch (e) {
        res.status(500).json({
            message: 'Cannot create post!'
        })
    }
};

const getPosts = async (req, res) => {
    try {
        const posts =
            await Post
            .find()
                .populate('user', 'name').populate('comment', 'body');
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json({
            message: 'Cannot fetch posts!'
        })
    }
};

const get = async (req, res) => {
    try {
        const post = await Post.findById({ _id: req.params.id }).populate('user', 'name');
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json({
            message: 'Cannot fetch post!'
        })
    }
};

const remove = async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id });
        res.status(204).json({
            message: "Post deleted!"
        })
    } catch (e) {
        res.status(500).json({
            message: 'Cannot delete post!'
        })
    }
};

const update = async (req, res) => {
    try {
        await Post.update({ _id: req.params.id }, { $set: req.body });
        res.status(304).json({
            message: "Post modified!"
        })
    } catch (e) {
        res.status(500).json({
            message: 'Cannot update post!'
        })
    }
};


module.exports = {
    createPost,
    getPosts,
    get,
    remove,
    update
};
