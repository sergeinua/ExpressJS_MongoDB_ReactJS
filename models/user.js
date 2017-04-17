var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    login: String,
    password: String
});

var User = mongoose.model("User", userSchema);

module.exports = User;