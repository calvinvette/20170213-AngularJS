(function() {
  angular.module("OrderingModule").controller("ShipViaController", ShipViaController);
  ShipViaController.$inject = ['$scope'];
  console.log("ShipViaController assigned");
  function ShipViaController($scope) {
    console.log("ShipViaController Loaded");
    $scope.shipViaOptions = [
      { id: 1, name:'Next Day', price:100.0},
      { id: 2, name:'Two Day', price:50.0},
      { id: 3, name:'Ground', price:0.0}
    ]
    $scope.shipVia = null;
    $scope.$watch('shipVia', function() {
      console.log("shipVia is now: ");
      console.log($scope.shipVia);
      // This will stay local to the inner controller, it won't propagate up to the containing controller (CheckoutController)
    });
  }
  console.log("ShipViaController End IIFE");
})();
