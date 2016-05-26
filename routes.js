module.exports = (function(router) {
    'use strict';
    require('./app/routes/main')(router);
    require('./app/routes/login')(router);
    require('./app/routes/comments')(router);
});