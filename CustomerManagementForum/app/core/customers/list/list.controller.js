(function () {
    'use strict';

    angular.module('app.customers.list', ['ngAnimate'])

            .controller('CustomersListController', CustomersListController);

    CustomersListController.$inject = ['$scope', '$state', 'customersService'];

    function CustomersListController($scope, $state, customersService) {
        var vm = this;

        vm.deleteCompleted = deleteCompleted;
        vm.updateCompleted = updateCompleted;
        vm.selectAll = selectAll;
        
        // /////////////
        
        function selectAll() {
            if (vm.selectedAll) {
                vm.selectedAll = true;
            } else {
                vm.selectedAll = false;
            }
            angular.forEach($scope.IC.customers, function (item) {
                item.done = vm.selectedAll;
            });
        }
        
        function updateCompleted() {
            vm.customersList = $scope.IC.customers;
            vm.customersList = $scope.IC.customers.filter(function(item) {
                return item.done;
            })
            console.log(vm.customersList[0].cid);
            $state.go('root.customers.edit', {id: vm.customersList[0].cid});
        }

        function deleteCompleted() {
            $scope.IC.customers = $scope.IC.customers.filter(function (item) {
                console.log(item.done);
                if (item.done) {
                    return customersService.deleteCustomer(item).then(function(response) {
                        console.log(response);
                        $state.go('root.customers.list');
                    }, function(e) {
                        console.log(e);
                    });
                }
            });
        }
    }
})();
