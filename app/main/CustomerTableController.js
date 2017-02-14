(function() {
  angular.module("mainModule").controller("CustomerTableController", CustomerTableController);
  CustomerTableController.$inject = ['$scope', '$http'];
  function CustomerTableController($scope, $http) {
    console.log("In CustomerTableController");
    $scope.customers = [];

    $scope.numbers = [1,2,3,3,3,4];

    $http.get("http://www.nextgeneducation.com/weasley/customers.json").then(
      function(response) { // Success Callback
        console.log("Success!");
        // console.log(response);
        $scope.customers = response.data;
      },
      function(response) { // Error Callback
        console.log("Failure!");
        console.log(response);
      }
    );
  }
})();
