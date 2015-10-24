app.factory('Auth', function(FURL, $firebaseAuth, $firebaseArray, $firebaseObject){
  var ref = new Firebase(FURL);
  var auth = $firebaseAuth(ref);

  var Auth = {

    createProfile: function(uid, user) {
      var profile = {
        name: user.name,
        email: user.email
        //gravatar: get_gravatar(user.email, 40)
      };
      //console.log(uid);


      return new Firebase(FURL).child('profile').child(uid).set(profile);
    },

    login: function (user) {
      console.log('the user is', user);
      return auth.$authWithPassword({
        email: user.email,
        password: user.password
      });
    },

    signup: function(user) {
      console.log('the user is singing up', user);

      return auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function () {
        console.log('saving new user');
        return Auth.login(user);
      }).then(function(data) {
        console.log('the new user is,', data);
        return Auth.createProfile(data.uid, user);
      });

    }
  };

  auth.$onAuth(function(authData) {
    if (authData) {
      //console.log('we have authData and will be storing it', authData);
      Auth.user = authData;
      //copy our authData to Auth.user so it can be used in all our controllers

      Auth.user.profile = $firebaseObject(ref.child('profile').child(authData.uid));
      //set our Auth.user.profile so we have access to this data in our controllers
      console.log(Auth.user.profile);
    }
  });

  return Auth;
});

