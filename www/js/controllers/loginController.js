angular.module('vatesApp').controller('LoginCtrl', ['$rootScope','$scope','$http','$state','loginService', function($rootScope,$scope,$http,$state,loginService){

      $scope.invalido = false;
      $scope.cargando = false;
      $scope.mensaje = "";
      $scope.datos = {};

      $scope.ingresar = function(datos){
          if($scope.datos.user.length <= 1){
              $scope.invalido = true;
              $scope.mensaje = "Ingrese su usuario";
              return;
          }else if($scope.datos.password.length <=1){
              $scope.invalido = true;
              $scope.mensaje = "Ingrese su contraseña";
              return;
          }
          $scope.invalido=false;
          $scope.cargando=true;

          loginService.login($scope.datos.user, $scope.datos.password).then(function(data){
            if(data.logged == true) {
              alert("usuario log ok");
              $rootScope.username=$scope.datos.user;
              $state.go('listEmployees');
            }else{
              $scope.invalido = true;
              $scope.mensaje = "Usuario no existe";
            } 
          });
      }
}]);