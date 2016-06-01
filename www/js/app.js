var app = angular.module('vatesApp',['ionic']);


/*Controlador para login*/
app.controller('loginCtrl', ['$rootScope','$scope','$http','$state', function($rootScope,$scope,$http,$state){

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
                $state.go('addComment');
               }else{
                $scope.invalido = true;
                $scope.mensaje = "Usuario no existe";
               } 
          });
      }
}]);

/*Controlador para obtener a los empleados.*/
app.controller('employeeCtrl', ['$rootScope','$scope','$http',function ($rootScope,$scope,$http) {
      $http.get('http://localhost:8080/api/employees?pm='+$rootScope.username).success(function(data){
       $scope.employee = data;
      });
}]);

app.controller('commentCtrl', ['$rootScope','$scope','$http','employeeService',function ($rootScope,$scope,$http,employeeService) {
      $scope.employee_id = employeeService.getSelectedEmployee().id;
      $scope.employee_name = employeeService.getSelectedEmployee().name;
      $scope.comment;
      $scope.commentDate;

      $scope.add = function(){

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
        
        $http.post('http://localhost:8080/api/employees/'+$scope.employee_id+'/comments', newComment).success(function(data){
          alert(data.message);
        });
      }
}]);

app.service('employeeService', function () {
      var employee = {id: 1, name: 'lmolina'};

      return {
          getSelectedEmployee: function () {
              return employee;
          },
          setSelectedEmployee: function(emp) {
              employee = emp;
          }
      };
});

app.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider.state('listEmployees',{
    url:'/listEmployees',
    templateUrl:'templates/listEmployees.html'
  }).state('addComment',{
    url:'/addComment',
    templateUrl:'templates/addComment.html'
  }).state('login',{
    url:'/login',
    templateUrl:'templates/login.html'
  });
  $urlRouterProvider.otherwise('/login');
});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});