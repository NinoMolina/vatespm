angular.module('vatesApp').controller('CommentListCtrl',['$scope','$state','$http','employeeService',function ($scope,$state,$http,employeeService) {
  
  var selectedEmployee = employeeService.getSelectedEmployee();
  
  $http.get('http://localhost:8080/api/employees/'+selectedEmployee.$loki+'/comments').success(function(data){
  	$scope.commentsByEmployee = data;  
  });

  $scope.showAddComment = function() {
  	$state.go('addComment');
  }

}]);