'use strict';

(function(angular) {

  angular
    .module('jarvis')
    .run(AppRun);

  AppRun.$inject = ['$rootScope', '$state', 'LoginService'];

  function AppRun($rootScope, $state, LoginService){
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) { 
      if (toState.name != 'login'){ 
        var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (!(LoginService.isUserLoggedin() || cookieValue === 'true')) {
          $state.go('login');
          event.preventDefault();
        }
       }
    });
  }

})(angular);