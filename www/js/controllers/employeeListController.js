angular.module('vatesApp').controller('EmployeeListCtrl', ['$rootScope','$scope','$http','$state','employeeService',function ($rootScope,$scope,$http,$state,employeeService) {
      

      $http.get('http://localhost:8080/api/employees?pm='+$rootScope.username).success(function(data){
      	$scope.employees = data;
      });

      $scope.showComments = function(key) {
      	employeeService.setSelectedEmployee($scope.employees[key]);
      	$state.go('comments');
      };

      $scope.showMenu = function() {
	  	alert('onHold');
	  };

}]);