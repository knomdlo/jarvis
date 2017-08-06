'use strict';

(function(angular) {

  angular
  .module('jarvis.routes.SteamModule')
  .config(SteamConfig);

  SteamConfig.$inject = ['$stateProvider'];

  function SteamConfig($stateProvider) {
    $stateProvider
    .state('steam', {
      templateUrl: 'modules/views/steam/templates/steam.html',
      url: '/steam',
      controller: 'SteamController',
      controllerAs: 'vm',
    });
  }

})(angular);