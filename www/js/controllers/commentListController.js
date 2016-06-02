angular.module('vatesApp').controller('CommentListCtrl',['$scope','$state','$http','employeeService','commentService',function ($scope,$state,$http,employeeService,commentService) {
  
  var selectedEmployee = employeeService.getSelectedEmployee();
  

  commentService.getCommentsByEmployee(selectedEmployee.$loki).then(function(data){
  	$scope.commentsByEmployee = data;  
  });
  
  $scope.showAddComment = function() {
  	$state.go('addComment');
  }

}]);