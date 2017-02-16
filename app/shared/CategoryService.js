(function() {
  angular.module("SharedModule").service("CategoryService", CategoryService);
  CategoryService.$inject = ['$http'];
  function CategoryService($http) {
    console.log("CategoryService Loaded.");
    this.categories = [];

    this.getAllCategories = function() {
      return $http({url:'/api/category'});
    };

    this.getCategory = function(categoryID) {
      return $http({url:'/api/category/' + categoryID});
    };
  }
})();
