angular.module('vatesApp').service('loginService', function ($http) {

	var baseUrl = 'http://localhost:8080/api';
	
	var login = function(user, password) {
    	var requestData = new Object();
        requestData.user = user;
        requestData.password = password;
      	var promise = $http.post(baseUrl + '/login', requestData).then(function (response) {
        	console.log(response);
        	return response.data;
      	});
      	return promise;
    };

    return {
        login: login
    };
});