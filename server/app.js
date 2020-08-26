const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MongoClient = require("mongodb").MongoClient;
const path = require('path');
const cors = require('cors');

const postRoutes = require('./routes/post.route');

const mongoDB = "mongodb://localhost:27017/belsendi";
mongoose.connect(mongoDB, { useNewUrlParser: true });
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('dev'));
app.use('/api/posts', postRoutes);



module.exports = app;
