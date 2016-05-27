module.exports = (function(router) {
    'use strict';

    // Enabling CORS
    router.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       next();
    });

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