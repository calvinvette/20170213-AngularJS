(function() {
  angular.module("SharedModule").service("ProductService", ProductService);
  ProductService.$inject = ['$http'];
  function ProductService($http) {
    console.log("ProductService Loaded.");


    this.getProducts = function() {
      return $http({url:'/api/product'});
    };
  }
})();
