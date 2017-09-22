(function () {
    'use strict';

    angular.module('app.customersService', [])

            .factory('customersService', customersService);

    customersService.$inject = ['$http', '$log', '$q', 'URL'];

    function customersService($http, $log, $q, URL) {
        return {
            getCustomers: getCustomers,
            getCustomer: getCustomer,
            updateCustomer: updateCustomer,
            addCustomer: addCustomer,
            deleteCustomer: deleteCustomer
        };

        function getCustomers() {
            return $http.get(URL + '/getCustomers/listAll')
                    .then(getCustomersComplete)
                    .catch(getCustomersFailed);

            function getCustomersComplete(response) {
                return response.data;
            }

            function getCustomersFailed(e) {
                var newMessage = 'XHR Failed for getCustomers.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
        
        function getCustomer(id) {
            return $http.get(URL + '/getCustomers/listByCid', {params: {cid: id}})
                    .then(getCustomerComplete)
                    .catch(getCustomerFailed);

            function getCustomerComplete(response) {
                return response.data;
            }

            function getCustomerFailed(e) {
                var newMessage = 'XHR Failed for getCustomer.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
        
        function updateCustomer(id, customer) {
            var params = {'id': id, 'customer': customer};
            return $http.post(URL + '/updateCustomer/updateCustomer', params)
                .then(updateCustomerComplete)
                .catch(updateCustomerFailed);
            
            function updateCustomerComplete(response) {
                console.log(response);
                location.reload();
                return response.data;
            }

            function updateCustomerFailed(e) {
                var newMessage = 'XHR Failed for updateCustomer.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
        
        function addCustomer(customer) {
            return $http.post(URL + '/addCustomer/addCustomer', customer)
                .then(addCustomerComplete)
                .catch(addCustomerFailed);
            
            function addCustomerComplete(response) {
                console.log(response);
                location.reload();
                return response.data;
            }

            function addCustomerFailed(e) {
                var newMessage = 'XHR Failed for addCustomer.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
        
        function deleteCustomer(customer) {
            return $http.post(URL + '/deleteCustomer/deleteCustomer', customer)
                .then(deleteCustomerComplete)
                .catch(deleteCustomerFailed)
            function deleteCustomerComplete(response) {
                location.reload();
                return response.data;
            }
            
            function deleteCustomerFailed(e) {
                var newMessage = 'XHR Failed for deleteCustomer.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();
