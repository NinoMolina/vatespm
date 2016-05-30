module.exports = (function(router) {
    'use strict';
    var CommentController = require('./commentController.js');
    var controller = new CommentController();

	router.route('/employees/:id/comments')
	    .get(function(req, res) {
	    	var employeeId = req.params.id;
	        var data = controller.getComments(employeeId);
	        res.json(data);
		})
		.post(function(req, res) {
			var employeeId = req.params.id;
			var body = req.body;

			var comment = body.comment;
			var pm = body.pm;
			var commentDate = body.commentDate;

			var id = controller.addComment(employeeId, comment, pm, commentDate);

			res.status(200).send({message: 'comment added!. Id ' + id});

		});

});