module.exports = (function(router) {
    'use strict';
    var bodyParser = require('body-parser');
    var LoginController = require('../modules/login/loginController.js');
    var controller = new LoginController();

	router.route('/login')
	    .post(function(req, res) {
	        var body = req.body;
	        console.log(body);

	        var user = body.user;
	        var password = body.password;

	        var isLogged = controller.login(user,password);

	        if(!isLogged) {
	        	res.status(401);
	        }
	        
	        res.json({ logged: isLogged });
	});
});