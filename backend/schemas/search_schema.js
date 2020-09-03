const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchSchema = new Schema({
    description: { type: String, required: true},
    dateFrom: { type: Date, required: false},
    dateTo: {type: Date, required: false},
}, {
    timestamps: true,
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;