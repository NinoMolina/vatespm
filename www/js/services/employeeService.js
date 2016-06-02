angular.module('vatesApp').service('employeeService', function ($http) {
    var employee = {};

	var baseUrl = 'http://localhost:8080/api';

    var getEmployeesByPm = function(pm) {
    	// $http returns a promise, which has a then function, which also returns a promise
      	var promise = $http.get(baseUrl + '/employees?pm='+pm).then(function (response) {
        	// The then function here is an opportunity to modify the response
        	console.log(response);
        	// The return value gets picked up by the then in the controller.
        	return response.data;
      	});
      	// Return the promise to the controller
      	return promise;
    };

    var getSelectedEmployee = function () {
            return employee;
        };

    var setSelectedEmployee = function(emp) {
            employee = emp;
        };

    return {
        getSelectedEmployee: getSelectedEmployee,
        setSelectedEmployee: setSelectedEmployee,
        getEmployeesByPm: getEmployeesByPm
    };
});