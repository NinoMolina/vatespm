module.exports = (function(router) {
    'use strict';
    // Enabling CORS
    router.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       next();
    });

    require('./app/modules/login/loginRoute')(router);
    require('./app/modules/comments/commentsRoute')(router);
    require('./app/modules/employees/employeesRoute')(router);
});
