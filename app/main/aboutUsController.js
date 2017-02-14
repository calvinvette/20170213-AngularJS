(function() {
  angular.module("mainModule").controller("aboutUsController", aboutUsController);
  aboutUsController.$inject = ['$scope'];
  function aboutUsController($scope) {
    console.log("In the About Us Controller");
    $scope.company = {
      name : "Weasley's Wizarding Wheezes",
      streetAddress : "10 Spring Gardens",
      city : "London, SW1A 2BN"
    };
    $scope.today = new Date();
    $scope.clickMe = function() {
      console.log("I was clicked at " + new Date());
    };
  };
})();
