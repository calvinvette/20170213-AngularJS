(function() {
  angular.module("AuthModule").controller("RegisterController", RegisterController);
  RegisterController.$inject = ['$scope'];
  console.log("RegisterController assigned");
  function RegisterController($scope) {
    console.log("RegisterController Loaded");
    $scope.userName = "";
    $scope.password = "";
    $scope.confirmPassword = "";
    $scope.rememberMe = false;
    $scope.email = "";
    $scope.firstName = "";
    $scope.lastName = false;
    $scope.companyName = "";
    $scope.address = "";
    $scope.city = "";
    $scope.state = "";
    $scope.postalCode = "";
    $scope.country = "";

    $scope.successMessage = "";
    $scope.errorMessage = "";

    $scope.register = function() {
      console.log("Registering user: " + $scope.userName);
      if ($scope.password == $scope.confirmPassword) {
        $scope.errorMessage = "Passwords do not match!";
        $scope.successMessage = "";
        console.log("password and confirm password do not match!");
        return false;
      }
      var validUserNamePassword = ($scope.password == "superSecret");
      console.log("Valid: " + validUserNamePassword);
      if (validUserNamePassword) {
        $scope.successMessage = "Successfully Registered";
        $scope.errorMessage = "";
      } else {
        $scope.errorMessage = "Invalid userName/password!";
        $scope.successMessage = "";
      }
      return validUserNamePassword;
    }
  }
})();
