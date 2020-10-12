const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchSchema = new Schema({
    description: { type: String, required: false},
    checkboxes: {type: Array, required: false},
    dateFrom: { type: Date, required: false},
    dateTo: {type: Date, required: false},
}, {
    timestamps: true,
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;