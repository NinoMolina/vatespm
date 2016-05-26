module.exports = (function(router) {
    'use strict';
    var bodyParser = require('body-parser');
    //var router = require('express').Router();

    // middleware to use for all requests
	router.use(function(req, res, next) {
	    // do logging
	    console.log('New request!.');
	    next(); // make sure we go to the next routes and don't stop here
	});

    router.get('/', function(req, res) {
        res.json({ message: 'welcome to our api!' });   
    });

    //return router;
});