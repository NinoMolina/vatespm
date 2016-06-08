angular.module('vatesApp').service('commentService', function ($http) {

	var baseUrl = 'https://vatespm.herokuapp.com/api';

    var getCommentsByEmployee = function(employeeId) {
      	var promise = $http.get(baseUrl + '/employees/'+employeeId+'/comments').then(function (response) {
        	console.log(response);
        	return response.data;
      	});
      	return promise;
    };

    var addComment = function(employeeId, newComment) {
      	var promise = $http.post(baseUrl + '/employees/'+employeeId+'/comments', newComment).then(function (response) {
        	console.log(response);
        	return response.data;
      	});
      	return promise;
    };

    return {
        getCommentsByEmployee: getCommentsByEmployee,
        addComment: addComment
    };
});