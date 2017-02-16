(function () {
  'use strict';
  angular.module("ProductModule")
    .controller("ProductDetailController", ProductDetailController);

  ProductDetailController.$inject = ['$scope', 'ProductService', 'CategoryService', 'CartFactory'];

  function ProductDetailController($scope, ProductService, CategoryService, CartFactory) {
    $scope.quantity = 1;
    $scope.product = null;

    ProductService.getProduct(42)
      .then(function (res) {
        $scope.product = res.data;
        CategoryService.getCategory($scope.product.categoryID)
          .then(function (res) {
            $scope.categoryName = res.data.categoryName
          }, function (error) {
            console.error("Error getting category: "+error.data, error);
          });
      }, function (error) {
        console.error("Error getting product: "+error.data, error);
      });


    $scope.addToCart = function(product, quantity) {
      CartFactory.addToCart(product, quantity).then(
        function () {
          console.log(product.productName + " was added to your cart","Added");
        },
        function (err) {
          console.error("Error adding to cart", err);
        }
      );
    };

  }
})();
