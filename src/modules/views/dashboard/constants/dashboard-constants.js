'use strict';

(function(angular) {

  angular
    .module('jarvis.views.DashboardModule')
    .constant('DASHBOARD', {
      SIDEBAR : {
        AUTOSVN : [
          {label : 'ADD', route : 'addsvn'},
          {label : 'REMOVE', route : 'removesvn'},
          {label : 'DOWNLOAD', route : 'downloadsvn'}
        ],

        STEAM : [
          {label : 'CREDENTIALS', route : 'addsvn'}
        ]
      }
    });

})(angular);