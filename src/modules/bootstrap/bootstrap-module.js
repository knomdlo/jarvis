'use strict';

angular.module('jarvis', [
'ui.router',
'ui.bootstrap',
'angularSpinner',
'ngToast',
'jarvis.routes.DashboardModule',
'jarvis.routes.SteamModule',
'jarvis.routes.LoginModule',
'jarvis.views.DashboardModule',
'jarvis.routes.AutoSVNModule',
'jarvis.views.AutoSVNModule',
'jarvis.views.SteamModule',
'jarvis.views.LoginModule',
'jarvis.components.SideBar',
]);