(function() {
  angular.module("ProductModule").controller("ProductListController", ProductListController);
  ProductListController.$inject = ['$scope', '$http', 'CategoryService', 'ProductService'];
  function ProductListController($scope, $http, CategoryService, ProductService) {
    console.log("In ProductListController");
    $scope.category = null;
    $scope.products = ProductService.getProducts();

    $scope.categories = CategoryService.getAllCategories();
    $scope.$watch("category", function() {
      if ($scope.category != null) {
        console.log("Category Selected: " + $scope.category.categoryName);
        $scope.$emit("CategorySelectedEvent", $scope.category);
      }
    });
  }
})();
