(function() {
  angular.module("ProductModule").controller("ProductSearchController", ProductSearchController);
  ProductSearchController.$inject = ['$scope', '$http', 'ProductService'];
  function ProductSearchController($scope, $http, ProductService) {
    console.log("In ProductSearchController");
    $scope.searchString = "";
    $scope.products = ProductService.getProducts();
  }
})();
