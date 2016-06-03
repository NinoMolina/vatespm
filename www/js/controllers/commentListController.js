angular.module('vatesApp').controller('CommentListCtrl',['$scope','$state','$ionicPopup','$http','employeeService','commentService',function ($scope,$state,$ionicPopup,$http,employeeService,commentService) {
  
  var selectedEmployee = employeeService.getSelectedEmployee();
  

  commentService.getCommentsByEmployee(selectedEmployee.$loki).then(function(data){
  	$scope.commentsByEmployee = data;  
  });

  var showPopupDetail = function(title,comment) {
            var myPopup = $ionicPopup.show({
                      templateUrl: 'templates/employee-comment-detail.html',
                      title: title,
                      subTitle: 'showing main information about comment employee',
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

  $scope.showAddComment = function() {
  	$state.go('addComment');
  }

  $scope.showMenu = function(event,key) {
            
            var selectedComment = $scope.commentsByEmployee[key];
            $scope.selectedComment = selectedComment;

            var title = "Detalle de comentario";
            var comment = selectedComment.comment;
            showPopupDetail(title,comment);

	};

}]);