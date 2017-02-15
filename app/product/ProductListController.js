(function() {
  angular.module("ProductModule").controller("ProductListController", ProductListController);
  ProductListController.$inject = ['$scope', '$http'];
  function ProductListController($scope, $http) {
    console.log("In ProductListController");
    $scope.category = null;
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

    $scope.categories = [
      {
        "categoryID" : 2,
        "categoryName" : "Condiments",
        "description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      {
        "categoryID" : 4,
        "categoryName" : "Dairy Products",
        "description" : "Cheeses"
      },
      {
        "categoryID" : 1,
        "categoryName" : "Beverages",
        "description" : "Soft drinks, coffees, teas, beers, and ales"
      },
      {
        "categoryID" : 5,
        "categoryName" : "Grains/Cereals",
        "description" : "Breads, crackers, pasta, and cereal"
      },
      {
        "categoryID" : 7,
        "categoryName" : "Produce",
        "description" : "Dried fruit and bean curd"
      },
      {
        "categoryID" : 6,
        "categoryName" : "Meat/Poultry",
        "description" : "Prepared meats"
      },
      {
        "categoryID" : 8,
        "categoryName" : "Seafood",
        "description" : "Seaweed and fish"
      },
      {
        "categoryID" : 3,
        "categoryName" : "Confections",
        "description" : "Desserts, candies, and sweet breads"
      }
    ];
    $scope.$watch("category", function() {
      if ($scope.category != null) {
        console.log("Category Selected: " + $scope.category.categoryName);
        $scope.$emit("CategorySelectedEvent", $scope.category);
      }
    });
  }
})();
