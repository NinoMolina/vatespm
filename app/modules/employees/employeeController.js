'use strict';

var employeeModel = require('./employeeModel.js').model;

function EmployeeController() {
}

EmployeeController.prototype = {
    constructor: EmployeeController,
    getEmployees: function ()  {
    	return employeeModel.getEmployees();
    }
}

module.exports = EmployeeController;