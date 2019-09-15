(function () {
  "use strict";

  angular.module("app").factory("Interesse", Interesse);

  function Interesse() {
    return {
      adicionarInteresse: adicionarInteresse
    };


    function adicionarInteresse(interesse) {

      var key = firebase.database().ref().child('interesse').push().key;
      return firebase
        .database()
        .ref("interesse/" + key)
        .set({
          interesse: interesse
        }).then(function (response) {
          return true;
        }, function (error) {
          return false;
        });
    }

  }
})();