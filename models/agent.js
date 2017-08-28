var mongoose = require('mongoose');

var agentSchema = mongoose.Schema({
    name: String,
    surname: String,
    telNum: String
});

var Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;