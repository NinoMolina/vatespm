angular.module('vatesApp').controller('CommentAddCtrl', ['$rootScope','$scope','$http','$state','employeeService','commentService',function ($rootScope,$scope,$http,$state,employeeService,commentService) {
      $scope.selectedEmployee = employeeService.getSelectedEmployee();
      $scope.comment;
      $scope.commentDate;

      $scope.cancel = function() {
        $state.go('comments');
      };

      $scope.add = function() {

        var day = $scope.commentDate.getDate();
        var month = $scope.commentDate.getMonth() + 1;
        var year = $scope.commentDate.getFullYear();

        var commentDateFormatted = [(day < 10) ? '0' + day : day,
                                    (month < 10) ? '0' + month : month,
                                     year].join('/');

        var newComment = {
          comment: $scope.comment,
          commentDate: commentDateFormatted,
          pm: $rootScope.username
        };
        

        commentService.addComment($scope.selectedEmployee.$loki,newComment).then(function(data){
          alert(data.message);
          $state.go('comments');
        });
      }
}]);