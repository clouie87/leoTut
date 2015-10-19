angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {
  $scope.items = Products.all;
    console.log('the products are', $scope.items);

  })

.controller('ChatsCtrl', function($scope, Products) {
  $scope.image = "http://ak-hdl.buzzfed.com/static/2015-03/19/11/enhanced/webdr05/grid-cell-15754-1426777975-0.jpg";

  $scope.button = function(product) {
    console.log('button was click', product);
    //$scope.product.image = "http://ak-hdl.buzzfed.com/static/2015-03/19/11/enhanced/webdr05/grid-cell-15754-1426777975-0.jpg";
    Products.saveProduct(product, $scope.image);
    //send to database. create a service to send to database.



  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
