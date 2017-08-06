'use strict';

(function(angular) {

  angular
  .module('jarvis.routes.LoginModule')
  .config(LoginConfig);

  LoginConfig.$inject = ['$stateProvider'];

  function LoginConfig($stateProvider) {
    $stateProvider
    .state('login', {
      templateUrl: 'modules/views/login/templates/login.html',
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'vm',
    });
  }

})(angular);