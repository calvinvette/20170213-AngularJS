(function() {
  angular.module("AuthModule").controller("RegisterController", RegisterController);
  RegisterController.$inject = ['$scope'];
  console.log("RegisterController assigned");
  function RegisterController($scope) {
    console.log("RegisterController Loaded");

  }
})();
