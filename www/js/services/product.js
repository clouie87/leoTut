app.factory('Products', function(FURL, $firebaseArray) {
  // Might use a resource here that returns a JSON array
  var ref = new Firebase(FURL);
  var products = $firebaseArray(ref.child('products'));

  // Some fake testing data
  var Products = {
    all: products,

    saveProduct: function(product, image){
      console.log('will save this to the database', product);

      var newProduct = {
        uImg: product.uImg,
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
