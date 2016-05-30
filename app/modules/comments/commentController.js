'use strict';

var commentModel = require('./commentModel.js').model;

function CommentController() {
}

CommentController.prototype = {
    constructor: CommentController,
    getComments: function (employeeId)  {
    	return commentModel.getComments(employeeId);
    },

    addComment: function (employeeId, comment, pm, commentDate) {
    	var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		var creationDate = dd + '/' + mm + '/' + yyyy;

		return commentModel.save(employeeId, comment, commentDate, creationDate, pm);
    }
}

module.exports = CommentController;
