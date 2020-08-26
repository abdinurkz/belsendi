const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secretKey');
const User = require('../models/user.model');

const auth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.user = undefined;
        return next()
    }
    const token = authHeader.replace('Bearer ', '');
    try {
        let decodedJwt = jwt.verify(token, jwtSecret);
        User.findById(decodedJwt.id)
            .then(user => {
                if (user) {
                    req.user = user
                } else {
                    req.user = undefined
                }
                return next()
            })
            .catch(e => {
            console.log(e.message)
        })
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({message: 'Invalid token!'})
        }
    }
};

const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({
            error: "not auth"
        })
    }
    next()
};

const isAdmin = (req, res, next) => {
    let userId = req.user.id;

    User.findById(userId)
        .then(user => {
            if (user.role !== 'admin') {
                return res.status(403).send({msg: "Access forbiden"});
            }

            next()
        })
        .catch(e => {
            res.status(500).send({error: "There was some error: " + e.message})
        })

};

module.exports = {
    auth,
    isAuth,
    isAdmin
};
