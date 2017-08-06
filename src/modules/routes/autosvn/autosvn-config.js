'use strict';

(function(angular) {

  angular
  .module('jarvis.routes.AutoSVNModule')
  .config(AutoSVNConfig);

  AutoSVNConfig.$inject = ['$stateProvider'];

  function AutoSVNConfig($stateProvider) {
    $stateProvider
    .state('autosvn', {
      templateUrl: 'modules/views/autosvn/templates/autosvn.html',
      url: '/autosvn',
      controller: 'AutoSVNController',
      controllerAs: 'vm',
    })
    .state('autosvn.addsvn', {
      templateUrl: 'modules/views/autosvn/templates/addsvn.html',
      url: '/addSVN'
    })
    .state('autosvn.downloadsvn', {
      templateUrl: 'modules/views/autosvn/templates/downloadsvn.html',
      url: '/downloadSVN'
    })
    .state('autosvn.removesvn', {
      templateUrl: 'modules/views/autosvn/templates/removesvn.html',
      url: '/removeSVN'
    });

  }

})(angular);