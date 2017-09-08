var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name: String,
    telephone: String,
    email: String,
    message: String,
    agentId: String,
    itemId: String
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;