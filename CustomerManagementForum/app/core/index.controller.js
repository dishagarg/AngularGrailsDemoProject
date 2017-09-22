(function () {
    'use strict';

    angular.module('app.index', ['app.customersService'])

            .controller('IndexController', IndexController);

    IndexController.$inject = ['$log', 'customersService'];

    function IndexController($log, customersService) {
        var vm = this;

        vm.customers = [];

        retrieve();

        function retrieve() {
            return getCustomers().then(function () {
                $log.info('Retrieved Customers');
            });
        }

        function getCustomers() {
            return customersService.getCustomers()
                    .then(function (data) {
                        vm.customers = data;
                        console.log(data);
                        return vm.customers;
                    });
        }
    }
})();
