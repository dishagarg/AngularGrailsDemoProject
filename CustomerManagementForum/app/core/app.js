(function () {
    'use strict';

    angular.module('app', [
        'app.index',
        'app.form',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.customers.edit',
        'app.customers.list',
        'app.directives.form',
        'app.directives.about',
        'ui.router',
        'ngAnimate',
        'pascalprecht.translate',
        'ngCookies'
    ]);
})();
