var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name: String,
    telephone: String,
    email: String,
    message: String
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;