'use strict';

(function(angular) {

    angular
        .module('jarvis.views.AutoSVNModule')
        .constant('SVNCONSTANTS', {
            SIDEBAR: [
                { label: 'DOWNLOAD', route: 'downloadsvn' },
                { label: 'ADD', route: 'addsvn' },
                { label: 'REMOVE', route: 'removesvn' }
                
            ],
            ADDURL: 'http://localhost:8085/AutoSVN/svn/controller/addNewSvnLocation'
        });

})(angular);
