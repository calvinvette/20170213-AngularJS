(function() {
  angular.module("AuthModule").controller("LoginController", LoginController);
  LoginController.$inject = ['$scope'];
  console.log("LoginController assigned");
  function LoginController($scope) {
    console.log("LoginController Loaded");
    $scope.userName = "";
    $scope.password = "";
    $scope.rememberMe = false;
    $scope.successMessage = "";
    $scope.errorMessage = "";

    $scope.login = function() {
      console.log("Logging in user: " + $scope.userName);
      var validUserNamePassword = ($scope.password == "superSecret");
      console.log("Valid: " + validUserNamePassword);
      if (validUserNamePassword) {
        $scope.successMessage = "Successfully Logged In";
        $scope.errorMessage = "";
      } else {
        $scope.errorMessage = "Invalid userName/password!";
        $scope.successMessage = "";
      }
      return validUserNamePassword;
    }
  }
})();
