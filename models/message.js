var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name: String,
    telephone: String,
    email: String,
    message: String,
    agent: {type: mongoose.Schema.Types.ObjectId, ref: 'Agent'},
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
    timestamp: { type : Date, default: Date.now },
    unRead: Boolean
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;