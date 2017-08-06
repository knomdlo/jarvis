'use strict';

(function (angular) {

  angular
    .module('jarvis.views.LoginModule')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['LOGIN_CONSTANTS', '$state', 'ngToast', 'LoginService', 'usSpinnerService'];

  function LoginController(CONSTANTS, $state, ngToast, LoginService, usSpinnerService) {
    if ($state.is('autosvn')) {
      $state.go('.downloadsvn');
    }
    var vm = this;
    vm.sidebar = CONSTANTS.SIDEBAR;

    vm.loginToApp = function() {
      usSpinnerService.spin('spinner-1');
      LoginService.login('test', 'test' , true)
      .then(
        function (data){
          usSpinnerService.stop('spinner-1');
          $state.go('dashBoard');
        }, function(error) {
          usSpinnerService.stop('spinner-1');
          $state.go('dashBoard');
        });
    }
    
  }
})(angular);