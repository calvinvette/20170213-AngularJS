(function() {
  angular.module("ProductModule").controller("ProductSearchController", ProductSearchController);
  ProductSearchController.$inject = ['$scope', '$http'];
  function ProductSearchController($scope, $http) {
    console.log("In ProductSearchController");
    $scope.searchString = "";
    $scope.products = [
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
      },  {
          "productID" : 42,
          "productName" : "A 5th product",
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
          "productID" : 69,
          "productName" : "Another 6th product",
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
          "productID" : 17,
          "productName" : "Yet another 7th fake product",
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
          "productID" : 73,
          "productName" : "A 8th fake product",
          "supplierID" : 8,
          "categoryID" : 4,
          "quantityPerUnit" : "Box of 12",
          "unitPrice" : 81.34,
          "unitsInStock" : 40,
          "unitsOnOrder" : 0,
          "reorderLevel" : 0,
          "discontinued" : 0,
          "featured" : true
        },  {
            "productID" : 56,
            "productName" : "A 9th product",
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
            "productID" : 32,
            "productName" : "Another 10th fake product",
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
            "productID" : 13,
            "productName" : "Yet another 11th fake product",
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
            "productID" : 75,
            "productName" : "A fourth 12th fake product",
            "supplierID" : 8,
            "categoryID" : 4,
            "quantityPerUnit" : "Box of 12",
            "unitPrice" : 81.34,
            "unitsInStock" : 40,
            "unitsOnOrder" : 0,
            "reorderLevel" : 0,
            "discontinued" : 0,
            "featured" : true
          },  {
              "productID" : 15,
              "productName" : "A 13th fake product",
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
              "productID" : 19,
              "productName" : "Another 14th fake product",
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
              "productName" : "Yet another 15th fake product",
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
              "productName" : "A 16th fake product",
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
  }
})();
