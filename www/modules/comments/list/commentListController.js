angular.module('vatesApp').controller('CommentListCtrl',['$scope','$state','$ionicPopup','$http','employeeService','commentService',function ($scope,$state,$ionicPopup,$http,employeeService,commentService) {
  
  $scope.selectedEmployee = employeeService.getSelectedEmployee();
  

  commentService.getCommentsByEmployee($scope.selectedEmployee.$loki).then(function(data){
  	$scope.commentsByEmployee = data;  
  });

  $scope.showAddComment = function() {
  	$state.go('addComment');
  }

  $scope.showPopupComment = function(event,key) {
            
            $scope.selectedComment = $scope.commentsByEmployee[key];

            var myPopup = $ionicPopup.show({
                      templateUrl: 'modules/comments/list/comment-list-detail.html',
                      title: 'Comment',
                      scope: $scope,
                      buttons: [
                        {
                          text: '<b>Ok</b>',
                          type: 'button-positive',
                          onTap: function(e) { return true; }
                        }
                      ]
                  });

	};

}]);