(function() {
  angular.module("AuthModule").controller("LoginController", LoginController);
  LoginController.$inject = ['$scope'];
  console.log("LoginController assigned");
  function LoginController($scope) {
    console.log("LoginController Loaded");
    $scope.userName = "";
    $scope.password = "";
    $scope.successMessage = "";

    $scope.login = function() {
      console.log("Logging in user: " + $scope.userName);
      var validUserNamePassword = ($scope.password == "superSecret");
      console.log("Valid: " + validUserNamePassword);
      if (valid) {
        $scope.successMessage = "Successfully Logged In"; 
      }
      return validUserNamePassword;
    }
  }
})();
