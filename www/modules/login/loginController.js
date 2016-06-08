angular.module('vatesApp').controller('LoginCtrl', function($rootScope,$scope,$http,$state,loginService){

      $scope.user = {};

      $scope.login = function(data){
          if($scope.user.username.length <= 1){
              alert("Please fill username field");
              return;
          }else if($scope.user.password.length <=1){
              alert("Please fill password field");
              return;
          }


          loginService.login($scope.user.username, $scope.user.password).then(function(data){
            if(data.logged == true) {
              
              $rootScope.username=$scope.user.username;
              $state.go('listEmployees');
            }
          },function errorCallback(data){
              alert("Invalid user or password");
          });
      }
});