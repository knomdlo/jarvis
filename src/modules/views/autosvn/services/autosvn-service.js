'use strict';

(function(angular) {
  angular
  .module('jarvis.views.AutoSVNModule')
  .service('SVNService', svnService);

  svnService.$inject = ['$q', '$http', 'SVNCONSTANTS'];

  function svnService($q, $http, SVNCONSTANTS) {
    var addNewSVNRepo = function(branchName, svnLocation) {
      var defer = $q.defer();
      var postJson = {};
      postJson.branchName = branchName;
      postJson.svnLocation = svnLocation;
      var config = {
        method: 'POST',
        url: SVNCONSTANTS.ADDURL,
        data: postJson
      }
      $http(config).then(function(response) {
        defer.resolve(response.data);
      }, function(error) {
        defer.resolve(error);
      });
      return defer.promise;
    };

    return {
      addNewSVNRepo: addNewSVNRepo
    }
  }

})(angular);
