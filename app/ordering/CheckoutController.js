(function() {
  angular.module("OrderingModule").controller("CheckoutController", CheckoutController);
  CheckoutController.$inject = ['$scope'];
  console.log("CheckoutController assigned");
  function CheckoutController($scope) {
    console.log("CheckoutController Loaded");
    $scope.cart = [ {
      product : {
        productId : 1,
        name : "Bertie Bott's Every Flavoured Beans",
        price : 1.5
      },
      quantity : 4
    },{
      product : {
        productId : 7,
        name : "Exploding Fake Wand",
        price : 7.75
      },
      quantity : 2
    }];
    $scope.cartTotal = 0;
    $scope.shipVia = null;
    $scope.$watch('cart', function() {
      $scope.cartTotal = getCartTotal($scope.cart);
    }, true);
    $scope.removeFromCart = function(product) {
      console.log("Removing " + product.name + " from cart");
      for (var idx in $scope.cart) {
        var item = $scope.cart[idx];
        if (item.product == product) {
          $scope.cart.splice(idx, 1);
        }
      }
    }
    $scope.processOrder = function() {
      console.log("Processing Order...");
      for (var idx in $scope.cart) {
        var item = $scope.cart[idx];
        console.log(item);
      }
      console.log("Total: " + $scope.cartTotal);
      console.log("Ship Via: " + $scope.shipVia.name + "@" + $scope.shipVia.price);
      $scope.cart = [];
    }
  }

  function getCartTotal(cart) {
    var sum = 0;
    for (var idx in cart) {
      sum += cart[idx].quantity * cart[idx].product.price;
    }
    return sum;
  }
  console.log("CheckoutController End IIFE");
})();
