var app = angular.module('vatesApp',[]);


/*Controlador para login*/
app.controller('loginCtrl', ['$scope','$http', function($scope,$http){

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
                window.location = 'templates/empleados.html';
               }else{
                $scope.invalido = true;
                $scope.mensaje = "Usuario no existe";
               } 
          });
      }
}]);

/*Controlador para obtener a los empleados.*/
app.controller('employeeCtrl', ['$scope','$http',function ($scope,$http) {
      $http.get('http://localhost:8080/api/employees').success(function(data){
       $scope.employee = data;
      });
}]);

