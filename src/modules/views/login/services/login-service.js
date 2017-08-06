'use strict';

(function(angular) {
  angular
  .module('jarvis.views.LoginModule')
  .service('LoginService', LoginService);

  LoginService.$inject = ['$q', '$http', 'LOGIN_CONSTANTS', '$state'];

  function LoginService($q, $http, LOGIN_CONSTANTS, $state) {
    var userName;
    var isLoggedIn = false;
    

    var isUserLoggedin = function () {
      return isLoggedIn;
    };

    var login = function(userId, password) {
      var defer = $q.defer();
      var config = {
        method: 'POST',
        url: LOGIN_CONSTANTS.loginURL,
        data: {
          userId : userId,
          password : password,
          // isSignUp : isSignUp
        }
      }
      $http(config).then(function(response) {
        isLoggedIn = true;
        document.cookie = "isLoggedIn=true";
        defer.resolve(response.data);
      }, function(error) {
        defer.resolve(error);
      });
      return defer.promise;
    };

    var signUp = function(userName, email, userId, password) {
      var defer = $q.defer();
      var config = {
        method: 'POST',
        url: LOGIN_CONSTANTS.loginURL,
        params: {
          empId : userId,
          password : password,
          userName : userName,
          email : email
          // isSignUp : isSignUp
        }
      }
      $http(config).then(function(response) {
        isLoggedIn = true;
        document.cookie = "isLoggedIn=true";
        defer.resolve(response.data);
      }, function(error) {
        document.cookie = "isLoggedIn=true";
        $state.go('dashBoard');
        defer.resolve(error);
      });
      return defer.promise;
    };

    return {
      login: login,
      signUp: signUp,
      isUserLoggedin : isUserLoggedin
    }
  }

})(angular);