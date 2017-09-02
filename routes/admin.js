var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Page = require('../models/page');
var User = require('../models/user');
var Item = require('../models/item');
var Agent = require('../models/agent');

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

router.get('/item/list', isLogged,  function (req, res, next) {
    var message = null,
        _filter = null;
    if (req.query.rooms && _filter) {
        _filter.rooms = req.query.rooms;
    } else if (req.query.rooms) {
        _filter = {rooms: req.query.rooms};
    }
    if (req.query.district && _filter) {
        _filter.district = req.query.district;
    } else if (req.query.district) {
        _filter = {district: req.query.district};
    }
    Item.find(_filter, function (err, items) {
        return items;
    }).then((items) => {
        var filterDistrict = [],
            filterRooms = [];
        items.map((item) => {
            filterDistrict.push(item.district);
            filterRooms.push(item.rooms);
        });
        filterDistrict = Array.from(new Set(filterDistrict));
        filterRooms = Array.from(new Set(filterRooms));
        res.render('pages/admin/item-list', {
            items: items,
            message: message,
            filterDistrict: filterDistrict.sort(),
            filterRooms: filterRooms.sort(),
            _filter: _filter
        });
    });
});

router.get('/item/create', isLogged, function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/item/create',
            formMethod: 'post',
            formTitle: 'Добавить объект',
            btnText: 'создать',
            //TODO: move types to the settings collection
            itemTypes: [{type: 'rent', label: 'Аренда'}, {type: 'sale', label: 'Продажа'}]
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
    Agent.find(function (err, agents) {
        return agents;
    }).then((agents) => {
        res.render('pages/admin/item-form', {
            data: data,
            item: item,
            message: message,
            pics: pics,
            agents: agents
        });
    });
});

router.post('/item/create', isLogged, function (req, res, next) {
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

router.get('/item/:id', isLogged, function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/item/' + req.params.id,
            formMethod: 'post',
            formTitle: 'Редактировать данные',
            btnText: 'обновить',
            //TODO: move types to the settings collection
            itemTypes: [{type: 'rent', label: 'Аренда'}, {type: 'sale', label: 'Продажа'}]
        };
    Item.findById(req.params.id, function (err, item) {
        var pics = null;
        if (item.pics.length > 0) {
            pics = item.pics.split(',');
        }
        Agent.find(function (err, agents) {
            return agents;
        }).then((agents) => {
            res.render('pages/admin/item-form', {
                data: data,
                item: item,
                message: message,
                pics: pics,
                agents: agents
            });
        });
    });
});

router.post('/item/:id', isLogged, function (req, res, next) {
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
            item.agentId = req.body.agentId || item.agentId;

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

router.get('/agent/list', isLogged, function (req, res, next) {
    var message;
    Agent.find(function (err, agents) {
        return agents;
    }).then((agents) => {
        console.log('agents',agents);
        res.render('pages/admin/agent-list', {
            agents: agents,
            message: message
        });
    });
});

router.get('/agent/create', isLogged, function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/agent/create',
            formMethod: 'post',
            formTitle: 'Добавить агента',
            btnText: 'создать'
        },
        agent = new Agent({
            name: null,
            surname: null,
            telNum: null
        });
    res.render('pages/admin/agent-form', {
        data: data,
        message: message,
        agent: agent
    });
});

router.post('/agent/create', isLogged, function (req, res, next) {
    var newAgent = new Agent({
        name: req.body.name,
        surname: req.body.surname,
        telNum: req.body.telNum

    });
    newAgent.save(function (err, data) {
        if (err) {
            console.log('Error while creating agent', err);
            req.session.message = err;
        } else {
            req.session.message = 'Agent saved successfully';
            res.redirect('/admin/agent/list');
        }
    });
});

router.get('/agent/:id', isLogged, function (req, res, next) {
    var message = null,
        data = {
            formAction: '/admin/agent/' + req.params.id,
            formMethod: 'post',
            formTitle: 'Редактировать данные',
            btnText: 'обновить'
        };
    Agent.findById(req.params.id, function (err, agent) {
        res.render('pages/admin/agent-form', { data: data, agent: agent, message: message });
    });
});

router.post('/agent/:id', isLogged, function (req, res, next) {
    Agent.findById(req.params.id, function (err, agent) {
        if (err) {
            console.log('error', err);
        } else {
            agent.name = req.body.name || agent.name;
            agent.surname = req.body.surname || agent.surname;
            agent.telNum = req.body.telNum || agent.telNum;

            agent.save(function (err, agent) {
                if (err) {
                    console.log('error', err);
                } else {
                    req.session.message = 'Agent\'s data has been updated successfully';
                    res.redirect('/admin/agent/list');
                }
            });
        }
    });
});

router.delete('/agent/:id', isLogged, function (req, res, next) {
    Agent.findByIdAndRemove(req.params.id, function (err, data) {
        req.session.message = 'Agent has been successfully deleted';
        res.status(200).send('Agent deleted');
    });
});

module.exports = router;
