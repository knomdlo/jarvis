'use strict';

(function (angular) {

  angular
    .module('jarvis.views.SteamModule')
    .controller('SteamController', SteamController);

  SteamController.$inject = ['STEAMCONSTANTS','ngToast', 'SteamService', 'usSpinnerService'];

  function SteamController(CONSTANTS, ngToast, SteamService, usSpinnerService) {
    var vm = this;
    vm.fetchCreds = function() {
      vm.invalidUser = false;
      vm.password ='';
      if (angular.isDefined(vm.email) && angular.isDefined(vm.env)) {
        var url = CONSTANTS.fetchURL + '?email=' + vm.email + '&env=' + vm.env;
        usSpinnerService.spin('spinner-1');
        SteamService.getUserCreds(vm.email, vm.env)
        .then (
          function(password) {
            usSpinnerService.stop('spinner-1');
            if (password === 'Invalid User') {
              vm.invalidUser = true;
            } else {
              vm.password = password;  
            }
          }, 
          function(error) {
            ngToast.warning(CONSTANTS.MESSAGES.SERVER_DOWN);
            usSpinnerService.stop('spinner-1');
          });
      } else {
        ngToast.danger(CONSTANTS.MESSAGES.ADD_FORM_MISSING);
      }
    }
  }
})(angular);