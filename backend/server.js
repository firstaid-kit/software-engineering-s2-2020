const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));

// Specify which port and start listening
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    debug('listening on ' + PORT);
});

// load routes
app.get('/', (req,res) => {
    res.send({ok: true});
});

module.exports = server;