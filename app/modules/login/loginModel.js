'use strict';

var db = require('../db.js').db;

function LoginModel() {
}

LoginModel.prototype = {
    constructor: LoginModel,
    getUser: function (username, password) {
    	return db.getCollection('employees').findOne({$and: [{user: username}, {password: password}]});
    }
}

module.exports.model = new LoginModel();
