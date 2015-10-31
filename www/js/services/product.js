app.factory('Products', function(FURL, $firebaseArray, $firebaseObject, Auth) {
  // Might use a resource here that returns a JSON array
  var ref = new Firebase(FURL);
  var products = $firebaseArray(ref.child('products'));

  // Some fake testing data
  var Products = {
    all: function(){
      return products;
    },

    get: function(productId) {
      console.log('the product id is', productId);
      return $firebaseObject(ref.child('products').child(productId));
      //product
    },

    saveProduct: function(product, image){
      console.log('will save this to the database', product);

      var newProduct = {
        uImg: Auth.user.profile.gravatar,
        seller: Auth.user.profile.name,
        name :product.name,
        tagline: product.tagline,
        description: product.description,
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
