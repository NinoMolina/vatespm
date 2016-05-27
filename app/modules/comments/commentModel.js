'use strict';

var db = require('../db.js').db;

function CommentModel() {
}

CommentModel.prototype = {
    constructor: CommentModel,
    getComments: function () {
    	return db.getCollection('comments').data;
    },
    save: function (comment, commentDate, creationDate, pm) {
    	var newComment = {
			comment: comment,
			commentDate: commentDate,
			creationDate: creationDate,
			pm: pm
    	};
		
		var doc = db.getCollection('comments').insert(newComment);
		return doc.$loki;
    }
}

module.exports.model = new CommentModel();
