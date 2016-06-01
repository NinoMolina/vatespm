angular.module('vatesApp').controller('LoginCtrl', ['$rootScope','$scope','$http','$state', function($rootScope,$scope,$http,$state){

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
          var postObject = new Object();
          postObject.user = $scope.datos.user;
          postObject.password = $scope.datos.password;
          $http.post('http://localhost:8080/api/login',postObject).success(function(data){
               if(data.logged == true){
                alert("usuario log ok");
                $rootScope.username=postObject.user;
                $state.go('listEmployees');
               }else{
                $scope.invalido = true;
                $scope.mensaje = "Usuario no existe";
               } 
          });
      }
}]);