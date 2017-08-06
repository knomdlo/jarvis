'use strict';

(function(angular) {

  angular
  .module('jarvis.routes.DashboardModule')
  .config(DashboardConfig);

  DashboardConfig.$inject = ['$stateProvider'];

  function DashboardConfig($stateProvider) {
    $stateProvider
    .state('dashBoard', {
      templateUrl: 'modules/views/dashboard/templates/dashboard.html',
      url: '/dashBoard',
      controller: 'DashBoardController',
      controllerAs: 'vm'
    });
  }

})(angular);