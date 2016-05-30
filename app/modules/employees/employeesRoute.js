module.exports = (function(router) {
    'use strict';
    var EmployeeController = require('./employeeController.js');
    var controller = new EmployeeController();

	router.route('/employees')
	    .get(function(req, res) {
	    	var query = req.query;
	    	var pm = query.pm;

	    	var data = controller.getEmployees(pm);
	    	
	    	res.json(data);
		});

	router.route('/employees/:id')
	    .get(function(req, res) {
	    	var employeeId = req.params.id;
	    	var data = null;
	    	data = controller.getEmployee(employeeId);
	    	res.json(data);
		});

});