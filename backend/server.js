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


// Specify which port and start listening
const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//     debug('listening on ' + PORT);
//     console.log('listening on ' + PORT);
// });

// load routes
app
    .set('views', __dirname + '/views')
    .set('view engine', 'jsx')
    .get('/', (req, res) => res.render('../frontend/software-engineering-s2-2020/src/App'))
    .listen(PORT, () => console.log('Listening on ' + PORT))

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const searchRouter = require('./routes/search');
app.use('/search', searchRouter);

module.exports = app;