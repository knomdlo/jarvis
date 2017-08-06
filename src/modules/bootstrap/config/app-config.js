'use strict';

(function (angular) {

  angular
  .module('jarvis')
  .config(AppConfig);
  AppConfig.$inject = ['$logProvider', '$urlRouterProvider', '$httpProvider'];

  function AppConfig($logProvider, $urlRouterProvider, $httpProvider) {
    //this is for the dev mode
    $logProvider.debugEnabled(true);
    $urlRouterProvider.otherwise('/login');

    // let auth = window.btoa("admin:secret");
    // $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + auth;
  }
})(angular);