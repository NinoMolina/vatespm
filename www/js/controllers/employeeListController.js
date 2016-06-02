angular.module('vatesApp').controller('EmployeeListCtrl', ['$rootScope','$scope','$http','$state','employeeService',function ($rootScope,$scope,$http,$state,employeeService) {
      

	  employeeService.getEmployeesByPm($rootScope.username).then(function(data){
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