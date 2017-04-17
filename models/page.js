var mongoose = require('mongoose');

var pageSchema = mongoose.Schema({
    title: String,
    content: String,
    slug: String
});

var Page = mongoose.model("Page", pageSchema);

module.exports = Page;