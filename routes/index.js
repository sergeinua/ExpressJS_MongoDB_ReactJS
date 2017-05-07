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
    console.log('req',req.body);
    var _filter;
    if (req.body.filterDistrict) {
        _filter = {'district': req.body.filterDistrict};
    } else {
        _filter = null;
    }

    Item.find(_filter)
        .where('price')
        .gt(req.body.filterMinPrice ? parseInt(req.body.filterMinPrice) : 0)
        .lt(req.body.filterMaxPrice ? parseInt(req.body.filterMaxPrice) : 1000000)
        .where('rooms')
        .gt(req.body.filterMinRooms ? parseInt(req.body.filterMinRooms) - 1 : 0)
        .lt(req.body.filterMaxRooms ? parseInt(req.body.filterMaxRooms) + 1 : 10)
        // .where('district').in(req.body.filterDistrict)
        .sort(req.body.sort)
        .exec(function (err, items) {
            if (err) {
                res.status(500).send(err);
            }
            console.log('items', items);
            res.status(200).send(JSON.stringify(items));
        });
});

//returns an array of existing districts
router.post('/district', function (req, res, next) {

});

module.exports = router;
