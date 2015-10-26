angular.module('starter.services', [])

.factory('Products', function(FURL, $firebaseArray, Auth) {
  // Might use a resource here that returns a JSON array
    var ref = new Firebase(FURL);
    var products = $firebaseArray(ref.child('products'));

  // Some fake testing data
  var Products = {
    all: products,

    saveProduct: function(product, image){
      console.log('will save this to the database', product,Auth.user.profile.name);
      var newProduct = {
        uImg: Auth.user.profile.gravatar,
        seller: Auth.user.profile.name,
        name :product.name,
        price: product.price,
        image: image
      };

      return products.$add(newProduct).then(function(){
        //toaster.pop('success', "You created a new challenge!")
        console.log('added to db');
      });
      console.log(newProduct);

    }

  };
    return Products;


});


