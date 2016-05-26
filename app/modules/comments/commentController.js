'use strict';

var comments = [{id: 1, comment: 'quiere aumento de sueldo', commentDate: '01/05/2016', creationDate: '21/05/2016', pm: 'yosu'},
	        	{id: 2, comment: 'esta aburrido', commentDate: '02/05/2016', creationDate: '22/05/2016', pm: 'yosu'},
	        	{id: 3, comment: 'quiere ver los partidos de la champios league', commentDate: '03/05/2016', creationDate: '23/05/2016', pm: 'yosu'}];

var lastId = 3;

function CommentController() {
}

CommentController.prototype = {
    constructor: CommentController,
    getComments: function ()  {
	    return comments;
    },

    addComment: function (comment, pm, commentDate) {
    	var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		var creationDate = dd + '/' + mm + '/' + yyyy;
		lastId++;
		comments.push({id: lastId, comment: comment, commentDate: commentDate, creationDate: creationDate, pm: pm});

		return lastId;
    }
}

module.exports = CommentController;
