'use strict';
function LoginController() {
}

LoginController.prototype = {
    constructor: LoginController,
    login: function (user, password)  {
        return ('test' == user && 'test' == password);
    }
}

module.exports = LoginController;
