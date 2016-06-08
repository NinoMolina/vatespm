angular.module('vatesApp').controller('EmployeeListCtrl', function ($rootScope,$scope,$http,$state,$ionicActionSheet,$ionicPopup,employeeService) {
      
	   $scope.username = $rootScope.username;

     employeeService.getEmployeesByPm($rootScope.username).then(function(data){
      	$scope.employees = data;
      });

      var showPopupDetail = function() {
            var myPopup = $ionicPopup.show({
                      templateUrl: 'modules/employees/employee-list-detail.html',
                      title: 'Detail',
                      subTitle: 'showing main information',
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

      $scope.showMenu = function(event,key) {
            
            var selectedEmployee = $scope.employees[key];
            $scope.selectedEmployee = selectedEmployee;

            var title = selectedEmployee.name + ' ' + selectedEmployee.lastName
            $ionicActionSheet.show({
              buttons: [{
                text: 'Show Comments'
              }, {
                text: 'Detail'
              }],
              cancelText: 'Cancel',
              titleText: title,
              buttonClicked: employeeMenuButtonClicked
            });

	};

});