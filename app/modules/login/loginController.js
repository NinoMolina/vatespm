'use strict';

var loginModel = require('./loginModel.js').model;

function LoginController() {
}

LoginController.prototype = {
    constructor: LoginController,
    login: function (username, password)  {
    	var user = loginModel.getUser(username, password);
        return (user != null);
    }
}

module.exports = LoginController;
