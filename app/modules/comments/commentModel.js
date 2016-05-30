'use strict';

var db = require('../db.js').db;

function CommentModel() {
}

CommentModel.prototype = {
    constructor: CommentModel,
    getComments: function (employeeId) {
    	return db.getCollection('employees').get(employeeId).comments;
    },
    save: function (employeeId, comment, commentDate, creationDate, pm) {
        var emp = db.getCollection('employees').get(employeeId);
        var newId = emp.comments.length + 1;

        var newComment = {
            id: newId,
            comment: comment,
            commentDate: commentDate,
            creationDate: creationDate,
            pm: pm
        };

        emp.comments.push(newComment);

		return newId;
    }
}

module.exports.model = new CommentModel();
