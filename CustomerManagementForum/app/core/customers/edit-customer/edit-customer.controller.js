(function () {
    'use strict';

    angular.module('app.customers.edit', ['ui.router', 'app.customersService'])

            .controller('EditCustomerController', EditCustomerController);

    EditCustomerController.$inject = ['$scope', '$state', '$stateParams', 'customersService', 'customer'];

    function EditCustomerController($scope, $state, $stateParams, customersService, customer) {
        var vm = this;
        
        vm.$onInit = $onInit;
        vm.updateCustomer = updateCustomer;
        vm.getCustomers = getCustomers;
        vm.customer = customer;
        
        // //////////////
        
        function $onInit() {
            console.log(vm.customer);
        }
        
        function getCustomers() {
            return customersService.getCustomers()
                    .then(function (data) {
                        vm.customers = data;
                        return vm.customers;
                    });
        }

        function updateCustomer() {
            console.log($stateParams.id);
            console.log(vm.customer);
            return customersService.updateCustomer($stateParams.id, vm.customer).then(function(response) {
                $scope.IC.customers = response;
                $state.go('root.customers.list');
            }, function(error) {
                console.log(error);
            });
        }
    }
})();
