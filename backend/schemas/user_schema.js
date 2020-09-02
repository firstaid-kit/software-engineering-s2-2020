const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    affiliation: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;