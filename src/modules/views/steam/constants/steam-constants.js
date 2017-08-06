'use strict';

(function(angular) {

    angular
        .module('jarvis.views.SteamModule')
        .constant('STEAMCONSTANTS', {
            //Remove this http: part once integrated with backend app
            fetchURL: 'http://localhost:8085/AutoSVN/svn/controller/getUserCreds',
            MESSAGES : {
              SERVER_DOWN : 'Oops!! Looks like server is down. Please try again after some time.',
              ADD_FORM_MISSING : 'Email & Environment cannot be empty'
            }
        });

})(angular);
