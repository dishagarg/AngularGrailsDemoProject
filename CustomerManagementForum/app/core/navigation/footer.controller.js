(function () {
    'use strict';

    angular.module('app.nav.footer', [])

            .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', '$rootScope', '$translate'];

    function FooterController($scope, $rootScope, $translate) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
            $scope.currentLang = langKey;
        };

        $rootScope.$on('$translateChangeSuccess', function(event, data) {
          var language = data.language;

          $rootScope.lang = language;
        });
    }
})();
