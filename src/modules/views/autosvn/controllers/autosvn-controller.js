'use strict';

(function (angular) {

  angular
    .module('jarvis.views.AutoSVNModule')
    .controller('AutoSVNController', AutoSVNController);

  AutoSVNController.$inject = ['SVNCONSTANTS', '$state', 'ngToast', 'SVNService', 'usSpinnerService'];

  function AutoSVNController(CONSTANTS, $state, ngToast, SVNService, usSpinnerService) {
    if ($state.is('autosvn')) {
      $state.go('.downloadsvn');
    }
    var vm = this;
    vm.sidebar = CONSTANTS.SIDEBAR;

    vm.addLocation = function() {
      if (angular.isDefined(vm.svnName) && angular.isDefined(vm.svnLocation)) {
        usSpinnerService.spin('spinner-1');
        SVNService.addNewSVNRepo (vm.svnName, vm.svnLocation)
        .then(function(data){
          usSpinnerService.stop('spinner-1');
          ngToast.danger(data.message);
          console.log(data);
        }, function(error){
          usSpinnerService.stop('spinner-1');
          console.log(data);
        });
      } else {
        ngToast.danger('Name & location are mandatory');
      }
    }
    
  }
})(angular);