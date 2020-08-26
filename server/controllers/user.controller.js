const validateRegister = require('../utils/validation/register');
const validateLogin = require('../utils/validation/login');
const { jwtSecret } = require('../config/secretKey');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.register = async function (req, res) {
    const { errors, isValid } = validateRegister(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    await User.findOne({
        where: {email: req.body.email}
    })
        .exec()
        .then(user => {
            if (user) {
                return res.status(400).json({email: 'E-mail уже существует'})
            } else {
                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    phone: req.body.phone,
                    role: req.body.role,
                };

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        User.create(newUser)
                            .then(user => {
                            const payload = {
                                id: user.id,
                                name: user.name,
                            };
                            jwt.sign(
                                payload,
                                jwtSecret,
                                {expiresIn: 5465346},
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        id: user.id,
                                        token: token,
                                        role: user.role
                                    });
                                }
                            );
                        })
                            .catch(err => console.log(err))
                    })
                })
            }
        }).catch(err => console.log(err))
};

exports.login = async function (req, res) {
    const { errors, isValid } = validateLogin(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const { email, password } = req.body;
    await User.findOne({ email })
        .exec()
        .then(user => {
            if (!user) {
                errors.email = 'Пользователь не найден';
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name
                        };
                        jwt.sign(
                            payload,
                            jwtSecret,
                            {expiresIn: 5465346},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    id: user.id,
                                    token: token,
                                    role: user.role
                                });
                            }
                        );
                    } else {
                        errors.password = 'Неверный пароль';
                        return res.status(400).json(errors);
                    }
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))
};

exports.current = async function (req, res) {
    try {
        await res.json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email
        });
    } catch (e) {
        await res.status(500).json({
            message: 'Cannot fetch current user!'
        })
    }
};

exports.getListOfUsers = async function (req, res) {
    try {
        const users = await User.find().populate('posts').exec();
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({
            message: 'Cannot fetch list of users!'
        })
    }
};
