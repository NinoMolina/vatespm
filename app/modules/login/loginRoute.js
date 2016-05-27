module.exports = (function(router) {
    'use strict';
    var LoginController = require('./loginController.js');
    var controller = new LoginController();

	router.route('/login')
	    .post(function(req, res) {
	        var body = req.body;
	        console.log(body);

	        var username = body.user;
	        var password = body.password;

	        var isLogged = controller.login(username,password);

	        if(!isLogged) {
	        	res.status(401);
	        }
	        
	        res.json({ logged: isLogged });
	});
});