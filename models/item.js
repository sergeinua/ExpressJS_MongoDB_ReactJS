var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    coordinates: Object,
    code: Number,
    pics: String,
    price: Number,
    beds: Number,
    bath: Number,
    sqft: Number,
    address: String,
    description: String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;