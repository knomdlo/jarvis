'use strict';

(function (angular) {

  angular
    .module('jarvis.views.DashboardModule')
    .controller('DashBoardController', DashBoardController);

  DashBoardController.$inject = ['DASHBOARD', '$state', 'LoginService'];

  function DashBoardController(DASHBOARD, $state, LoginService) {
 /*   if ($state.is('mainPage')) {
      $state.go('dashBoard');
    }*/
    var vm = this;
    vm.sideBarJSON = DASHBOARD.SIDEBAR;

    vm.login = function () {
      LoginService.loginUser();
      //$state.go('dashBoard');
    };
//    console.log(DASHBOARD.SIDEBAR.STEAM);
  }
})(angular);