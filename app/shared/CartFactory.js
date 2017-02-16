(function () {
  'use strict';
  angular.module('SharedModule').factory('CartFactory', CartFactory);
  CartFactory.$inject = ['$http', '$q'];
  function CartFactory($http, $q) { // $q is our deferred queuing service
    var self = this;
    self.cart = [];

    function removeFromCart(product) {
      return $http({
          url: "/api/cart",
          method: 'DELETE',
          data: {
            product: product
          },
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        })
        .then(function () {
          self.cart.splice(self.cart.findIndex((line) => line.product.productID === product.productID), 1);

          //
          // self.cart.findIndex(function (line) {
          //   return line.product.productID === product.productID;
          // });
          //
          //
            // for (var idx in self.cart) {
            //   var line = self.cart[idx];
            //   if (line.product.productID === product.productID) {
            //     self.cart.splice(idx, 1);
            //   }
            // }


          self.cart.subtotal = calculateSubtotal(self.cart);
        }, function (error) {
          console.error('Product not removed from cart.', error);
        });
    }

    function addToCart(product, quantity) {
      return $http({
          url: "/api/cart",
          method: 'POST',
          data: {
            product: product,
            quantity: quantity
          }
        })
        .then(function () {
          self.cart.push({
            product: product,
            quantity: quantity
          });
          self.cart.subtotal = calculateSubtotal(self.cart);
          //self.dumpCart();
          console.log("Cart:");
          self.cart.forEach((item) => console.log(item.product.productName + ", " + item.quantity));
          console.log("Total: " + self.cart.subtotal);
        }, function (error) {
          console.error('Product not have been added.', error);
        });
    }

    function dumpCart() {
      console.log("Cart:");
      for (var item of self.cart) {
        console.log(item);
      }
      console.log("Total: " + self.cart.subtotal);
    }

    if (!self.cart.length) {
      $http({
        url: '/api/cart'
      }).then(function (res) {
        res.data.forEach(function (line) {
          self.cart.push(line);
          self.cart.subtotal = calculateSubtotal(self.cart);
        })
      });
    }

    return {
      cart: self.cart,
      addToCart: addToCart,
      removeFromCart: removeFromCart//,
      // dumpCart: dumpCart
    };

    function calculateSubtotal(cart) {
      var subtotal = 0;
      cart.forEach(function (line) {
        subtotal += line.product.unitPrice * line.quantity;
      });
      return subtotal;
    }
  }
})();
