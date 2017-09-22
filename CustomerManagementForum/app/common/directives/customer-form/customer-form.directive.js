
/**
 * Customer Form directive.
 */
(function() {
    'use strict';

    angular.module('app.directives.form', []).directive('customerForm', customerForm);

    customerForm.$inject = ['$compile'];
    
    function customerForm($compile) {
        var directive = {
            templateUrl: '/common/directives/customer-form/customer-form.view.html',
            restrict: 'E',
            replace: true,
            scope: {
                customer: '=',
                formName: '<'
            }
        };
        return directive;
    }
  
})();
