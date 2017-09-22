(function () {
    'use strict';

    angular.module('app.form', [])

            .controller('AddCustomerController', AddCustomerController);

    AddCustomerController.$inject = ['$scope', '$state', '$filter', 'customersService'];

    function AddCustomerController($scope, $state, $filter, customersService) {
        var vm = this;

        vm.update = update;
        vm.customer = {};
        
        // //////////////
        
        function update(customer) {
            //Auto-generating id
            var arr = $scope.IC.customers.map(function(o){return o.cid;});
            arr.push(20000)
            var id = Math.max.apply(Math,arr)+1 ;
            vm.customer["cid"] = id;
            vm.customerForm = angular.copy(vm.customer);
            
            return customersService.addCustomer(vm.customerForm).then(function(response) {
                console.log(response);
                $state.go('root.customers.list');
            }, function(error) {
                console.log(error);
            });
        }
    }
})();
