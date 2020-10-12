const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    year: { type: String, required: true},
    doi: {type: String, required: true},
    topics: {type: Array, required: true}
}, {
    timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
