const Digest = require('../models/digest.model');

const createDigest = async (req, res) => {
    try {
        const digest = await Digest.create({
            title: req.body.title,
            image: req.file.path,
            description: req.body.description,
            user: req.user.id
        });
        res.status(201).json({ digest })
    } catch (e) {
        res.status(500).json({
            message: 'Cannot create digest!'
        })
    }
};

const getDigests = async (req, res) => {
    try {
        const digests = await Digest.find().exec();
        res.status(200).json(digests);
    } catch (e) {
        res.status(500).json({
            message: 'Cannot fetch digests!'
        })
    }
};

const get = async (req, res) => {
    try {
        const digest = await Digest.findById({ _id: req.params.id }).populate('user', 'name');
        res.status(200).json(digest)
    } catch (e) {
        res.status(500).json({
            message: 'Cannot fetch digest!'
        })
    }
};

const remove = async (req, res) => {
    try {
        await Digest.deleteOne(+req.params.id);
        res.status(204).json({
            message: "Digest deleted!"
        })
    } catch (e) {
        res.status(500).json({
            message: 'Cannot delete digest!'
        })
    }
};

const update = async (req, res) => {
    try {
        await Digest.update({ _id: req.params.id }, { $set: req.body });
        res.status(304).json({
            message: "Digest modified!"
        })
    } catch (e) {
        res.status(500).json({
            message: 'Cannot update digest!'
        })
    }
};


module.exports = {
    createDigest,
    getDigests,
    get,
    remove,
    update
};
