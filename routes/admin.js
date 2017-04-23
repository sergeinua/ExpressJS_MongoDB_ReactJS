var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Page = require('../models/page');
var User = require('../models/user');
var Item = require('../models/item');

function isLogged(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/admin/login');
    }
}

router.get('/', isLogged, function(req, res, next) {
    res.redirect('/admin/page/list');
});

router.get('/login', function (req, res, next) {
    res.render('pages/admin/login');
});

router.post('/login', function (req, res, next) {
    User.findOne({login: req.body.login}, function (err, user) {
        if (err) {
            res.status(500).send(err);
        }
        if (user) {
            if (user.password == req.body.password) {
                req.session.user = user;
                res.status(200).send(user);
            } else {
                res.status(500).send('Wrong password');
            }
        } else {
            res.status(500).send('User not found');
        }
    });
});

router.post('/logout', isLogged, function (req, res, next) {
    req.session.user = null;
    res.status(200).send('Logged out');
});

router.get('/page/list', isLogged, function (req, res, next) {
    var message = null;
    if (req.session.message) {
        message = req.session.message;
        req.session.message = null;
    }
    Page.find(function (err, pages) {
        res.render('pages/admin/page-list', { pages: pages, message: message });
    });
});

router.get('/page/create', isLogged, function (req, res, next) {
    var data = {
            formAction: '/admin/page/create',
            formMethod: 'post',
            formTitle: 'Create page',
            btnText: 'create'
        },
        message = null,
        page = new Page({
            title: null,
            content: null,
            slug: null
        });
    if (req.session.message) {
        message = req.session.message;
        req.session.message = null;
    }
    res.render('pages/admin/page-form', { page: page, data: data, message: message });
});

router.post('/page/create', isLogged, function (req, res, next) {
    var newPage = new Page({
        title: req.body.title,
        content: req.body.content,
        slug: req.body.slug
    });
    newPage.save(function (err, data) {
        if (err) {
            console.log('Error while creating page', err);
            req.session.message = err;
        } else {
            req.session.message = 'Page saved successfully';
            res.redirect('/admin/page/list');
        }
    })
});

router.get('/page/:id', isLogged, function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/page/' + req.params.id,
            formMethod: 'post',
            formTitle: 'Update page',
            btnText: 'update'
        };
    Page.findById(req.params.id, function (err, page) {
        res.render('pages/admin/page-form', { page: page, data: data, message: message });
    });
});

router.post('/page/:id', isLogged, function (req, res, next) {
    var page = new Page({
        title: req.body.title,
        content: req.body.content,
        slug: req.body.slug
    });
    Page.findById(req.params.id, function (err, page) {
        if (err) {
            console.log('error', err);
        } else {
            page.title = req.body.title || page.title;
            page.content = req.body.content || page.content;
            page.slug = req.body.slug || page.slug;
            page.save(function (err, page) {
                if (err) {
                    console.log('error', err);
                } else {
                    req.session.message = 'Page saved successfully';
                    res.redirect('/admin/page/list');
                }
            })
        }
    });
});

router.delete('/page/:id', isLogged, function (req, res, next) {
    Page.findByIdAndRemove(req.params.id, function (err, page) {
        req.session.message = 'Page was successfully deleted';
        res.status(200).send('Page deleted');
    });
});

router.get('/item/list',  function (req, res, next) {
    var message = null;
    Item.find(function (err, items) {
        res.render('pages/admin/item-list', { items: items, message: message });
    });
});

router.get('/item/create', function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/item/create',
            formMethod: 'post',
            formTitle: 'Create item',
            btnText: 'create'
        },
        item = new Item({
            coordinates: {
                lat: null,
                lng: null
            },
            code: null,
            pics: null,
            price: null,
            beds: null,
            bath: null,
            sqft: null,
            address: null,
            description: null
        });
    res.render('pages/admin/item-form', { data: data, item: item, message: message });
});

router.get('/item/:id', function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/item/' + req.params.id,
            formMethod: 'post',
            formTitle: 'Update item',
            btnText: 'update'
        };
    Item.findById(req.params.id, function (err, item) {
        res.render('pages/admin/item-form', { data: data, item: item, message: message });
    });
});

router.post('/item/:id', function (req, res, next) {
    Item.findById(req.params.id, function (err, item) {
        if (err) {
            console.log('error', err);
        } else {
            item.coordinates = { lat: req.body.lat, lng: req.body.lng } || item.coordinates;
            item.code = req.body.code || item.code;
            item.pics = req.body.pics || item.pics;
            item.price = req.body.price || item.price;
            item.beds = req.body.beds || item.beds;
            item.bath = req.body.bath || item.bath;
            item.sqft = req.body.sqft || item.sqft;
            item.address = req.body.address || item.address;
            item.description = req.body.description || item.description;

            item.save(function (err, page) {
                if (err) {
                    console.log('error', err);
                } else {
                    req.session.message = 'Item saved successfully';
                    res.redirect('/admin/item/list');
                }
            });
        }
    });
});

router.delete('/item/:id', isLogged, function (req, res, next) {
    Item.findByIdAndRemove(req.params.id, function (err, page) {
        req.session.message = 'Item was successfully deleted';
        res.status(200).send('Item deleted');
    });
});

module.exports = router;
