'use strict';

var db = require('../db.js').db;

function EmployeeModel() {
}

EmployeeModel.prototype = {
    constructor: EmployeeModel,
    getEmployees: function () {
    	return db.getCollection('employees').data;
    }
}

module.exports.model = new EmployeeModel();
