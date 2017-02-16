(function() {
  angular.module("ProductModule").controller("ProductListController", ProductListController);
  ProductListController.$inject = ['$scope', '$http', 'CategoryService', 'ProductService'];
  function ProductListController($scope, $http, CategoryService, ProductService) {
    console.log("In ProductListController");
    $scope.category = null;
    $scope.products = [];
    ProductService.getProducts().then(function(response) {
      console.log("Got products: ");
      // console.log(response.data);
      $scope.products = response.data;
    });
    $scope.$watch("products", function() {
      console.log("Products updated...");
    })

    $scope.categories = CategoryService.getAllCategories();
    $scope.$watch("category", function() {
      if ($scope.category != null) {
        console.log("Category Selected: " + $scope.category.categoryName);
        $scope.$emit("CategorySelectedEvent", $scope.category);
      }
    });
  }
})();
