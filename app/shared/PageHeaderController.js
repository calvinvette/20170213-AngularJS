(function () {
  'use strict';
  angular.module("SharedModule")
    .controller("PageHeaderController", PageHeaderController);

  PageHeaderController.$inject = ['$scope', 'ProductService', 'CartFactory'];

  function PageHeaderController($scope, ProductService, CartFactory) {
    console.log("PageHeaderController Loaded");
    $scope.cart = CartFactory.cart;
  }
})();
