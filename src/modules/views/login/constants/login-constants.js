'use strict';

(function(angular) {

  angular
    .module('jarvis.views.LoginModule')
    .constant('LOGIN_CONSTANTS', {
      loginURL: 'http://10.30.249.112:8085/auth/login'
    });

})(angular);