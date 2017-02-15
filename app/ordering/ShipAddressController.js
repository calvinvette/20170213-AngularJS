(function() {
  angular.module("OrderingModule").controller("ShipAddressController", ShipAddressController);
  ShipAddressController.$inject = ['$scope'];
  function ShipAddressController($scope) {
    console.log("ShipAddressController Loaded");
    $scope.customer = {
      "companyName" : "Some Company",
      "contactName" : "Jane Doe",
      "address" : "1234 Main",
      "city" : "London",
      "region" : "ON",
      "postalCode" : "N13JE6",
      "country" : "Canada"
    };
    $scope.$watch("customer", function() {
      console.log("Customer changed!");
      $scope.$emit("CustomerAddressChangedEvent", $scope.customer);
    }, false); // true would do a "deep" watch; property by property
  }
})();
