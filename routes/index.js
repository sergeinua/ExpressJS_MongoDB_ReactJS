var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {


    res.render('index', { title: 'Express', message: message });



});

module.exports = router;
