var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

var Item = require('../models/item');
var Agent = require('../models/agent');
var Message = require('../models/message');

//home page
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/rapp/build/index.html'));
});
router.get('/map', function(req, res, next) {
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
    if (req.body.filterType && _filter) {
        _filter.type = req.body.filterType;
    } else if(req.body.filterType) {
        _filter = {'type': req.body.filterType};
    }

    Item.find(_filter)
        .where('price')
        .gt(req.body.filterMinPrice ? parseInt(req.body.filterMinPrice) : 0)
        .lt(req.body.filterMaxPrice ? parseInt(req.body.filterMaxPrice) : 1000000)
        .where('rooms')
        .gt(req.body.filterMinRooms ? parseInt(req.body.filterMinRooms) - 1 : 0)
        .lt(req.body.filterMaxRooms ? parseInt(req.body.filterMaxRooms) + 1 : 10)
        .sort(req.body.sort)
        .exec(function (err, items) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(JSON.stringify(items));
        });
});

//returns an array of existing districts
router.post('/district', function (req, res, next) {
    Item.find().exec(function (err, districts) {
        if (err) {
            res.status(500).send(err);
        }
        var result = [],
            promise = new Promise((resolve, reject) => {
                districts.map((item, index) => {
                    result.push(item.district);
                });
                resolve(result);
            });

        promise.then((districts) => {
            //removing duplicates
            res.status(200).send(JSON.stringify(Array.from(new Set(districts))));
        });
    });
});

//single agent's data
router.get('/agent/:id', function (req, res, next) {
    Agent.findById(req.params.id, function (err, agent) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(JSON.stringify(agent));
        }
    });
});

//message for the agent
router.post('/message', function (req, res, next) {
    var newMessage = new Message({
        name: req.body.name,
        telephone: req.body.telephone,
        email: req.body.email,
        message: req.body.message
    });
    newMessage.save(function (err, data) {
        if (err) {
            console.log('Error while sending message', err);
            res.status(500).send('Error happened');
        } else {
            res.status(200).send('Success');
        }
    });
});

module.exports = router;
