var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Page = require('../models/page');
var User = require('../models/user');
var Item = require('../models/item');

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/');
    },
    filename: function (req, file, cb) {
        //check file name here
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('img');

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
//TODO: add auth after testing here
router.post('/img', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            console.log('error while upload: ', err);
            res.status(500).send(err);
        }
        res.status(200).send(req.file);
    });
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
    });
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
//TODO: add auth after testing here
router.get('/item/list',  function (req, res, next) {
    var message = null;
    Item.find(function (err, items) {
        console.log('items', items);
        res.render('pages/admin/item-list', { items: items, message: message });
    });
});
//TODO: add auth after testing here
router.get('/item/create', function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/item/create',
            formMethod: 'post',
            formTitle: 'Create item',
            btnText: 'create',
            //TODO: move types to the settings collection
            itemTypes: [{type: 'rent', label: 'Rent'}, {type: 'sale', label: 'Sale'}]
        },
        item = new Item({
            coordinates: {
                lat: null,
                lng: null
            },
            code: null,
            pics: null,
            price: null,
            rooms: null,
            sqft: null,
            address: null,
            district: null,
            description: null
        }),
        pics = null;
    res.render('pages/admin/item-form', { data: data, item: item, message: message, pics: pics });
});
//TODO: add auth after testing here
router.post('/item/create', function (req, res, next) {
    var newItem = new Item({
        coordinates: {
            lat: req.body.lat,
            lng: req.body.lng
        },
        code: req.body.code,
        pics: req.body.pics,
        price: req.body.price,
        rooms: req.body.rooms,
        sqft: req.body.sqft,
        address: req.body.address,
        district: req.body.district,
        description: req.body.description,
        type: req.body.type
    });
    newItem.save(function (err, data) {
        if (err) {
            console.log('Error while creating item', err);
            req.session.message = err;
        } else {
            req.session.message = 'Item saved successfully';
            res.redirect('/admin/item/list');
        }
    });
});
//TODO: add auth after testing here
router.get('/item/:id', function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/item/' + req.params.id,
            formMethod: 'post',
            formTitle: 'Update item',
            btnText: 'update',
            //TODO: move types to the settings collection
            itemTypes: [{type: 'rent', label: 'Rent'}, {type: 'sale', label: 'Sale'}]
        };
    Item.findById(req.params.id, function (err, item) {
        var pics = null;
        if (item.pics.length > 0) {
            pics = item.pics.split(',');
        }
        res.render('pages/admin/item-form', { data: data, item: item, message: message, pics: pics });
    });
});
//TODO: add auth after testing here
router.post('/item/:id', function (req, res, next) {
    Item.findById(req.params.id, function (err, item) {
        if (err) {
            console.log('error', err);
        } else {
            item.coordinates = { lat: req.body.lat, lng: req.body.lng } || item.coordinates;
            item.code = req.body.code || item.code;
            item.pics = req.body.pics || item.pics;
            item.price = req.body.price || item.price;
            item.rooms = req.body.rooms || item.rooms;
            item.sqft = req.body.sqft || item.sqft;
            item.address = req.body.address || item.address;
            item.district = req.body.district || item.district;
            item.description = req.body.description || item.description;
            item.type = req.body.type || item.type;

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
