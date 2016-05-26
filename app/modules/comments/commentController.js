'use strict';
function CommentController() {
}

CommentController.prototype = {
    constructor: CommentController,
    getComments: function ()  {
        var data = [{comment: 'comment1', commentDate: '01/05/2016', creationDate: '25/05/2016', pm: 'yosu'},
	        			{comment: 'comment1', commentDate: '01/05/2016', creationDate: '25/05/2016', pm: 'yosu'},
	        			{comment: 'comment1', commentDate: '01/05/2016', creationDate: '25/05/2016', pm: 'yosu'}];
	    return data;
    }
}

module.exports = CommentController;
