module.exports = (function(router) {
    'use strict';
    var bodyParser = require('body-parser');
    var CommentController = require('../modules/comments/commentController.js');
    var controller = new CommentController();

	router.route('/comments')
	    .get(function(req, res) {
	        var data = controller.getComments();
	        res.json(data);
	});

});