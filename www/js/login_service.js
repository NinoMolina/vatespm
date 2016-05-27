var app = angular.module('login.loginService',[]);

app.factory('LoginService',['$http','$q',function($http,$q){
	
	var self={
		login: function(datos){
			var d = $q.defer();
			var postObject = new Object();
			postObject.user = datos.user;
			postObject.password = datos.password;


			
			$http.post('http://localhost:8080/api/login',postObject).success(function(data){
				d.resolve(data);
			}).error(function(data){
				d.resolve(data);
			});
			return d.promise;
		}
	}
	return self;

}])