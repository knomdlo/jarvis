'use strict';

(function (angular) {
  angular
    .module('jarvis.views.SteamModule')
    .service('SteamService', SteamService);

  SteamService.$inject = ['STEAMCONSTANTS','$q','$http'];

  function SteamService(STEAMCONSTANTS, $q, $http) {
   var getUserCreds = function (userId, env) {
      var defer = $q.defer();
      var config = {
        method: 'GET',
        url: STEAMCONSTANTS.fetchURL,
        params: {
          email : userId,
          env : env
        }
      };

      $http(config).then(function(response) {
        defer.resolve(response.data.password);
      }, function(reject) {
        defer.reject(reject.data);
      });
      return defer.promise;
   };

   return {
    getUserCreds : getUserCreds
   };
  }

})(angular);
