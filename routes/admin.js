var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('layouts/admin');
});

module.exports = router;
