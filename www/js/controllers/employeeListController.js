angular.module('vatesApp').controller('EmployeeListCtrl', function ($rootScope,$scope,$http,$state,$ionicActionSheet,$ionicPopup,employeeService) {
      
	employeeService.getEmployeesByPm($rootScope.username).then(function(data){
      	$scope.employees = data;
      });

      var showPopupDetail = function() {
            var myPopup = $ionicPopup.show({
                      templateUrl: 'templates/employee-list-detail.html',
                      title: 'Detail',
                      subTitle: 'showing main information about employee',
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
      
      var employeeMenuButtonClicked = function(index) {
                switch (index) {
                  case 0: 
                    employeeService.setSelectedEmployee($scope.selectedEmployee);
                    $state.go('comments');
                    break;
                  case 1: 
                    showPopupDetail();
                    break;
                }
                return true;
      };

      $scope.showComments = function(key) {
      	employeeService.setSelectedEmployee($scope.employees[key]);
      	$state.go('comments');
      };

      $scope.showMenu = function(event,key) {
            
            var selectedEmployee = $scope.employees[key];
            $scope.selectedEmployee = selectedEmployee;

            var title = selectedEmployee.name + ' ' + selectedEmployee.lastName
            $ionicActionSheet.show({
              buttons: [{
                text: 'Ver Comentarios'
              }, {
                text: 'Detalle'
              }],
              cancelText: 'Cancelar',
              titleText: title,
              buttonClicked: employeeMenuButtonClicked
            });

	};

});