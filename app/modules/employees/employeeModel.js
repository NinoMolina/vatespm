'use strict';

var db = require('../db.js').db;

function EmployeeModel() {
}

EmployeeModel.prototype = {
    constructor: EmployeeModel,
    getEmployees: function () {
    	return db.getCollection('employees').chain().simplesort('lastName').data();
    },
    getEmployeesByPm: function (pm) {
    	return db.getCollection('employees').chain().find({pm: pm}).simplesort('lastName').data();
    },
    getEmployee: function (employeeId) {
    	return db.getCollection('employees').chain().get(employeeId);
    }
}

module.exports.model = new EmployeeModel();
