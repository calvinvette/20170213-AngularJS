(function() {
  angular.module("mainModule").controller("mainProductController", mainProductController);
  mainProductController.$inject = ['$scope'];
  function mainProductController($scope) {
    console.log("In the Main Product Controller");
    $scope.topProducts = [
      {
        "productID" : 56,
        "productName" : "A fake product",
        "supplierID" : 8,
        "categoryID" : 1,
        "quantityPerUnit" : "Box of 12",
        "unitPrice" : 81,
        "unitsInStock" : 40,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : 0,
        "featured" : true
      },
      {
        "productID" : 12,
        "productName" : "Another fake product",
        "supplierID" : 8,
        "categoryID" : 3,
        "quantityPerUnit" : "Box of 12",
        "unitPrice" : 11.23,
        "unitsInStock" : 40,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : 0,
        "featured" : true
      },
      {
        "productID" : 20,
        "productName" : "Yet another fake product",
        "supplierID" : 8,
        "categoryID" : 2,
        "quantityPerUnit" : "6 pack",
        "unitPrice" : 85.44,
        "unitsInStock" : 40,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : 0,
        "featured" : true
      },
      {
        "productID" : 25,
        "productName" : "A fourth fake product",
        "supplierID" : 8,
        "categoryID" : 4,
        "quantityPerUnit" : "Box of 12",
        "unitPrice" : 81.34,
        "unitsInStock" : 40,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : 0,
        "featured" : true
      }
    ];
  };
})();
