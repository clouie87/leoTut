angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, Auth, $state, $ionicPopup) {

    $scope.login = function () {
      console.log('in login function whats up');
      $state.go('tab.dash');

      //Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
      //  console.log(authData);
      //
      //  // User successfully logged in
      //}).catch(function(error) {
      //  if (error.code === "TRANSPORT_UNAVAILABLE") {
      //    console.log('we are redirecting');
      //    Auth.$authWithOAuthPopup("facebook").then(function(authData) {
      //      $state.go('tab.dash');
      //      // User successfully logged in. We can log to the console
      //      // since we’re using a popup here
      //      console.log(authData);
      //    });
      //  } else {
      //    // Another error occurred
      //    console.log(error);
      //  }
      //});
    };

    $scope.emailLogin = function () {
      console.log('will show a popup for the email login');

      console.log('open login modal');
      $scope.user = {};
      var myLogin = $ionicPopup.show({
        templateUrl: 'templates/partials/login.html',
        title: 'Seek & Shoot',
        cssClass: 'loginPopup',
        scope: $scope,
        buttons: [

          {
            text: 'Login',
            type: 'button-energized',
            onTap: function (user) {

              user = $scope.user;
              console.log('the use is logging in', user);
              Auth.login(user).then(function () {
                console.log("Logged in succesfully!");
                console.log(Auth.user);
                $state.go('tab.dash');

              }, function (err) {
                console.log('Error...');
                //toaster.pop('error', "Oops there was an error!");
              })
            }
          },
          {
            text: 'Signup',
            type: 'button-assertive',
            onTap: function (user) {
              console.log('the use is logging in', user);
              user = $scope.user;
              Auth.signup(user).then(function () {
                console.log("Logged in succesfully!");

                $state.go('tab.dash');

              }, function (err) {
                console.log('Error...', err);
                //toaster.pop('error', "Oops there was an error!");
              })
            }
          }]
      });
    }
  })

.controller('DashCtrl', function($scope, Products, Auth) {
  $scope.items = Products.all;
    console.log('the products are', $scope.items);
    console.log('the user is ', Auth.user);


      //var usersRef = new Firebase("https//<YOUR-FIREBASE-APP>.firebaseio.com/users");
      //return $firebaseAuth(usersRef);
  })

.controller('ChatsCtrl', function($scope, Products, Auth) {
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
