(function() {
  angular.module("OrderingModule").controller("CheckoutController", CheckoutController);
  CheckoutController.$inject = ['$scope', 'CartFactory'];
  // console.log("CheckoutController assigned");
  function CheckoutController($scope, CartFactory) {
    console.log("CheckoutController Loaded");
    $scope.cart = CartFactory.cart;
    //CartFactory.dumpCart();
    console.log("Cart:");
    $scope.cart.forEach((item) => console.log(item.product.productName + ", " + item.quantity));
    console.log("Total: " + $scope.cart.subtotal);

    $scope.shipVia = null;

    $scope.$on("ShipViaChangeEvent", function(evt, data) {
      // console.log("Got shipViaChange!");
      // console.log(evt);
      // console.log(data);
      $scope.shipVia = data;
    });
    $scope.$on("CustomerAddressChangedEvent", function(evt, data) {
      // console.log("Got CustomerAddressChanged!");
      $scope.customer = data;
    });
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
      console.log("Ship To: " + $scope.customer.contactName);
      console.log("\t" + $scope.customer.address);
      console.log("\t" + $scope.customer.city);
      console.log("\t" + $scope.customer.region);
      console.log("\t" + $scope.customer.country);
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
    // var sum = 0;
    // for (var idx in cart) {
    //   sum += cart[idx].quantity * cart[idx].product.price;
    // }
    // return sum;
    return cart.subtotal;
  }
  // console.log("CheckoutController End IIFE");
})();
