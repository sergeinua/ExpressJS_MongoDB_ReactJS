var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    coordinates: Object,
    code: Number,
    pics: String,
    price: Number,
    rooms: Number,
    sqft: Number,
    address: String,
    district: String,
    description: String,
    type: String,
    agentId: String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;