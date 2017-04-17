var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Page = require('../models/page');
var User = require('../models/user');

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
    page = {
        title: null,
        content: null,
        slug: null
    };
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
    var message = null;
    var data = {
        formAction: '/admin/page/' + req.params.id,
        formMethod: 'post',
        formTitle: 'Update page',
        btnText: 'update'
    };
    Page.findOne({ _id: req.params.id }, function (err, page) {
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

module.exports = router;
