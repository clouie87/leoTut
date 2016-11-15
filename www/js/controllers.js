angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, Auth, $state, $ionicPopup) {
  //console.log(Auth.user);
    if (Auth.user){
      console.log('user is already signed in', Auth.user);
    }
    $scope.login = function () {
      console.log('in login function whats up');
      $state.go('tab.dash');
    };

    // adding some notes to make a new pr.


    // making extra notes so i can add checkbox to my master pr!
    // what else can i put in here
    // closing issue #8
    // closing more issues
    //  adding new test
    //  closing more issues making sure stuff works the way i wanT :)

    // alksdjfaslkdj
    // asdkfajsd
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
    $scope.items = Products.all();
    console.log('the products are', $scope.items, Auth.user);


    //need to make a resolve to check to see if the user is logged in!
    //console.log('check o see if the use is logged in', Auth.user);
    //if (Auth.user){
    //  $scope.login = function(){
    //    return false;
    //  };
      //console.log('set the button to be logout button');

    //}else {
    //  $scope.login = function(){
    //    return true
    //  };
    //  $scope.emailLogin = function () {
    //    console.log('will show a popup for the email login');
    //
    //    console.log('open login modal');
    //    $scope.user = {};
    //    var myLogin = $ionicPopup.show({
    //      templateUrl: 'templates/partials/login.html',
    //      title: 'Seek & Shoot',
    //      cssClass: 'loginPopup',
    //      scope: $scope,
    //      buttons: [
    //
    //        {
    //          text: 'Login',
    //          type: 'button-energized',
    //          onTap: function (user) {
    //
    //            user = $scope.user;
    //            console.log('the use is logging in', user);
    //            Auth.login(user).then(function () {
    //              console.log("Logged in succesfully!");
    //              console.log(Auth.user);
    //              $state.go('tab.dash');
    //
    //            }, function (err) {
    //              console.log('Error...');
    //              //toaster.pop('error', "Oops there was an error!");
    //            })
    //          }
    //        },
    //        {
    //          text: 'Signup',
    //          type: 'button-assertive',
    //          onTap: function (user) {
    //            console.log('the use is logging in', user);
    //            user = $scope.user;
    //            Auth.signup(user).then(function () {
    //              console.log("Logged in succesfully!");
    //
    //              $state.go('tab.dash');
    //
    //            }, function (err) {
    //              console.log('Error...', err);
    //              //toaster.pop('error', "Oops there was an error!");
    //            })
    //          }
    //        }]
    //    });
    //  }
    //}
  })

  .controller('ItemDetailCtrl', function($scope, Products, Auth, $stateParams, $ionicPopup, $state) {
    console.log('in item controller/', $stateParams.itemId);
    $scope.item = [];
    $scope.item = Products.get($stateParams.itemId).$loaded().then(function(data){
      //console.log(data.seller);
      $scope.item = data;
      console.log($scope.item.name);
    });
    $scope.showReviewView = true;

    $scope.showReview = function(){
      console.log('showReview was clicked');
      $scope.showReviewView = true;
      $scope.showSimilarView = false;
      $scope.showProfileView = false;
    }
    $scope.showSimilar = function(){
      console.log('showSimilar was clicked');
      $scope.showReviewView = false;
      $scope.showSimilarView = true;
      $scope.showProfileView = false;
    }
    $scope.showSellerProfile = function(){
      console.log('showSellerProfile was clicked');
      $scope.showReviewView = false;
      $scope.showSimilarView = false;
      $scope.showProfileView = true;
    }

    //$window.Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh'));

    $scope.payment = function(){
      console.log('open payment');
      $scope.showPaymentView = true;

    }
  })

.controller('PhotoController', function($scope, $rootScope, $state, Products, Auth, $cordovaCamera) {
  console.log('got to the PhotoContoller linked');

  //$scope.photos = Photo.all;
  //$scope.challenges = Challenge.all;
  //$scope.signedIn = Auth.signedIn;
  //console.log($scope.photos);
  //var user = Auth.user;

  //console.log(Auth.user);
  //console.log(Auth.user.profile);
  //console.log(Auth.signedIn);

  //$scope.accepteds = Accept.getAcceptsForUser(Auth.user.uid);
  //console.log('the accepted are ', $scope.accepteds);

  $rootScope.data = {};
  $rootScope.data.imageURI = "https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/23326_587691014579651_886097383_n.jpg?oh=55ed92e2cf7f744414fa254540ede4d3&oe=56AE6B4D";
  //need to use rootScope here because im passing it between pages(?)
  $rootScope.accept = [];

  ////////////////////////////take the photo////////////////////////////////


  $rootScope.takePhoto = function (data) {
    console.log('going to camera');

    $rootScope.photo = {};

    //var Camera= navigator.camera;

    //console.log(data);

    //alert('upload pic is working');

    var options = {
      quality: 75,
      destinationType: navigator.camera.DestinationType.DATA_URL,
      sourceType: navigator.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: navigator.camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    };


    $state.go('tab.photo');

    navigator.camera.getPicture(function (photo) {
      //alert('image is: ' + options.quality);
      $rootScope.data.imageURI = photo;


      var image = "data:image/jpeg;base64," + photo;
      //alert(image);
      $scope.image = image;

      //alert('image is: ' + image);

      $rootScope.$apply();
    }, function (err) {

      alert("Sorry!  Can't take your photo!");
    }, options);

  };

    $scope.button = function(product) {
      //alert($rootScope.data.image, $scope.image);
      //alert(product.image);
      alert($scope.image);
      console.log(product);
      console.log(Auth.user.profile.name, Auth.user.profile.email);
      //$scope.product.image = "http://ak-hdl.buzzfed.com/static/2015-03/19/11/enhanced/webdr05/grid-cell-15754-1426777975-0.jpg";
      Products.saveProduct(product, $scope.image);
      //send to database. create a service to send to database.
    }

    $scope.library = function() {
      console.log('open photo library');
    }

    })

  .controller('ChatsCtrl', function($scope, Products, Auth) {
  $scope.image = "https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/582294_729460050402746_1738454447_n.png?oh=f230bfb638aa92a118d777def081ab42&oe=56B7BC66";

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
    $scope.showReview = function(){
      console.log('showReview was clicked');
    }
    $scope.showSimilar = function(){
      console.log('showSimilar was clicked');
    }
    $scope.showSellerProfile = function(){
      console.log('showSellerProfile was clicked');
    }
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
