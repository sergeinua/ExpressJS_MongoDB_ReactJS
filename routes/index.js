var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Item = require('../models/item');

//home page
router.get('/', function(req, res, next) {
    Item.find(function (err, items) {
        res.render('pages/index', { items: items });
    });
});

//getting all item objects for further placing markers
router.post('/', function (req, res, next) {
    Item.find(function (err, items) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(items);
    });
});

module.exports = router;
