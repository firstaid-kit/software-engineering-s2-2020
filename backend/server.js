const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// Configure Mongo
const db = 'mongodb+srv://seer01:seer01@seer01.o5sfj.mongodb.net/seer?retryWrites=true&w=majority';

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

// load routes
const userRouter = require('./routes/user');
app.use('/user', userRouter);

const searchRouter = require('./routes/search');
app.use('/search', searchRouter);

const articleRouter = require('./routes/article');
const res = require("express");
app.use('/article', articleRouter);

// handle production
if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.resolve(__dirname, 'frontend/software-engineering-s2-2020', 'build','index.js'));
}

// Specify which port and start listening
//const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => console.log('Listening on ' + PORT))

module.exports = app;
