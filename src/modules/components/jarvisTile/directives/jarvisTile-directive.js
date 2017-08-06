'use strict';

(function (angular) {

  angular
    .module('jarvis.components.JarvisTile')
    .directive('jarvisTile', jarvisTile);

  function jarvisTile() {

    return {
      restrict: 'E',
      scope: {},
      bindToController: {
        icon: '@',
        text: '@',
        link: '@'
      },
      controller: jarvisTileController,
      controllerAs: 'vm',
      templateUrl: 'modules/components/jarvisTile/templates/jarvisTile.html'
    };

  }

  jarvisTileController.$inject = [];

  function jarvisTileController() {
    var vm = this;
    vm.faClass = 'fa fa-' + vm.icon + ' fa-5x';
  }

})(angular);