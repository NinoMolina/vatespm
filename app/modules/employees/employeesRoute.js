module.exports = (function(router) {
    'use strict';
    var EmployeeController = require('./employeeController.js');
    var controller = new EmployeeController();

	router.route('/employees')
	    .get(function(req, res) {
	        var data = controller.getEmployees();
	        res.json(data);
		});

});