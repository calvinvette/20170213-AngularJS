(function() {
  angular.module("AuthModule").controller("LoginController", LoginController);
  LoginController.$inject = ['$scope'];
  console.log("LoginController assigned");
  function LoginController($scope) {
    console.log("LoginController Loaded");
    $scope.userName = "hpotter";
    $scope.password = "secret";

    $scope.login = function() {
      console.log("Logging in user: " + $scope.userName);
      var validUserNamePassword = ($scope.password == "superSecret");
      console.log("Valid: " + validUserNamePassword);
      return validUserNamePassword;
    }
  }
})();
