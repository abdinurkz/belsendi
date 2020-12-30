const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const { auth } = require('./middlewares/auth');
const { mongoDB } = require('./config/database');

const postRoutes = require('./routes/post.route');
const userRoutes = require('./routes/user.route');
const digestRoutes = require('./routes/digest.route');


const CURRENT_WORKING_DIR = process.cwd()
const app = express()

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Belsendi server app');
});
app.use(auth);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/digests', digestRoutes);
app.use('/uploads', express.static('uploads'));
app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});




module.exports = app;
