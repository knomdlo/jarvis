'use strict';

(function (angular) {

  angular
    .module('jarvis.components.SideBar')
    .directive('sideBar', sideBar);

  function sideBar() {

    return {
      restrict: 'E',
      scope: {},
      bindToController: {
        content: '='
      },
      controller: sideBarController,
      controllerAs: 'vm',
      templateUrl: 'modules/components/sidebar/templates/sideBar.html'
    };

  }

  sideBarController.$inject = [];

  function sideBarController() {
    var vm = this;    
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
  }

})(angular);