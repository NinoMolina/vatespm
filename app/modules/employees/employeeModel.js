'use strict';

var db = require('../db.js').db;

function EmployeeModel() {
}

EmployeeModel.prototype = {
    constructor: EmployeeModel,
    getEmployees: function () {
    	return db.getCollection('employees').data;
    },
    getEmployeesByPm: function (pm) {
    	return db.getCollection('employees').find({pm: pm});
    },
    getEmployee: function (employeeId) {
    	return db.getCollection('employees').get(employeeId);
    }
}

module.exports.model = new EmployeeModel();
