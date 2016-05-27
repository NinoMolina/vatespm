'use strict';

var commentModel = require('./commentModel.js').model;

function CommentController() {
}

CommentController.prototype = {
    constructor: CommentController,
    getComments: function ()  {
    	return commentModel.getComments();
    },

    addComment: function (comment, pm, commentDate) {
    	var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		var creationDate = dd + '/' + mm + '/' + yyyy;

		return commentModel.save(comment, commentDate, creationDate, pm);
    }
}

module.exports = CommentController;
