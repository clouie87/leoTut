angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, Auth, $state, $ionicPopup) {
  console.log(Auth.user);
    if (Auth.user){
      console.log('user is already signed in');
    }
    $scope.login = function () {
      console.log('in login function whats up');
      $state.go('tab.dash');
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

.controller('DashCtrl', function($scope, Products, Auth, $ionicPopup, $state) {

    //need to make a resolve to check to see if the user is logged in!
    console.log('check o see if the use is logged in', Auth.user);
    if (Auth.user){
      $scope.login = function(){
        return false;
      };
      //console.log('set the button to be logout button');

    }else {
      $scope.login = function(){
        return true
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
    }
  })

.controller('ChatsCtrl', function($scope, Products, Auth) {
  $scope.image = "http://ak-hdl.buzzfed.com/static/2015-03/19/11/enhanced/webdr05/grid-cell-15754-1426777975-0.jpg";

  $scope.button = function(product) {
    console.log('button was click', product);
    console.log(Auth.user.profile.name, Auth.user.profile.email);
    //$scope.product.image = "http://ak-hdl.buzzfed.com/static/2015-03/19/11/enhanced/webdr05/grid-cell-15754-1426777975-0.jpg";
    Products.saveProduct(product, $scope.image);
    //send to database. create a service to send to database.



  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,Auth) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Auth) {
    $scope.profile = Auth.user.profile.gravatar;
    $scope.userName = Auth.user.profile.name;

    $scope.toggleText = 'Follow';
    $scope.buttonStyle="button-default";

    $scope.toggle = true;

    $scope.follow = function(){
      if($scope.toggleText === 'Follow'){
        $scope.toggleText = 'Following!';
        $scope.buttonStyle="button-balanced";
      }else{
        $scope.toggleText = "Follow";
        $scope.buttonStyle="button-default";
      }
      console.log($scope.toggleText);
    }

  $scope.settings = {
    enableFriends: true
  };

});
