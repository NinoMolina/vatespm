angular.module('vatesApp').service('employeeService', function () {
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