'use strict';

var employeeModel = require('./employeeModel.js').model;

function EmployeeController() {
}

EmployeeController.prototype = {
    constructor: EmployeeController,
    getEmployees: function ()  {
    	return employeeModel.getEmployees();
    },
    getEmployees: function (pm)  {
    	var result = null;
    	if(pm == null) {
    		result = employeeModel.getEmployees();
    	} else {
			result = employeeModel.getEmployeesByPm(pm);
    	}
    	return result;
    },
    getEmployee: function (employeeId)  {
    	return employeeModel.getEmployee(employeeId);
    }
}

module.exports = EmployeeController;