var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

var Item = require('../models/item');

//home page
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/rapp/build/index.html'));
});

//getting all item objects for further placing markers
router.post('/', function (req, res, next) {
    Item.find(function (err, items) {
        if (err) {
            res.status(500).send(err);
        }
        console.log('items',items);
        res.status(200).send(JSON.stringify(items));
    });
});

module.exports = router;
