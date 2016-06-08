var app = angular.module('vatesApp',['ionic','ion-floating-menu']);

app.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider.state('listEmployees',{
    url:'/listEmployees',
    controller: 'EmployeeListCtrl',
    templateUrl:'modules/employees/employee-list.html'
  }).state('comments',{
    url:'/comments',
    controller:'CommentListCtrl',
    templateUrl:'modules/comments/list/comment-list.html',
    cache: false
  }).state('addComment',{
    url:'/addComment',
    templateUrl:'modules/comments/add/comment-add.html'
  }).state('login',{
    url:'/login',
    controller:'LoginCtrl',
    templateUrl:'modules/login/login.html'
  });
  $urlRouterProvider.otherwise('/login');
});

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
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