module.exports = (function(router) {
    'use strict';
    var bodyParser = require('body-parser');
    var CommentController = require('../modules/comments/commentController.js');
    var controller = new CommentController();

	router.route('/comments')
	    .get(function(req, res) {
	        var data = controller.getComments();
	        res.json(data);
		})
		.put(function(req, res) {
			var body = req.body;

			var comment = body.comment;
			var pm = body.pm;
			var commentDate = body.commentDate;

			var id = controller.addComment(comment, pm, commentDate);

			res.status(200).send({message: 'comment added!. Id ' + id});

		});

});