(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

    function config($stateProvider, $urlRouterProvider, $translateProvider) {
        $urlRouterProvider.when('', '/customers/list');
        $urlRouterProvider.when('/', '/customers/list');
        $urlRouterProvider.when('/customers', '/customers/list');
        $urlRouterProvider.when('/customers/', '/customers/list');
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('root', {
                    abstract: true,
                    url: '/',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'header': {
                            templateUrl: 'core/navigation/header.view.html',
                            controller: 'HeaderController',
                            controllerAs: 'HC'
                        },
                        'menu': {
                            templateUrl: 'core/navigation/menu.view.html',
                            controller: 'MenuController',
                            controllerAs: 'MC'
                        },
                        'breadcrumbs': {
                            templateUrl: 'core/navigation/breadcrumbs.view.html',
                            controller: 'BreadcrumbsController',
                            controllerAs: 'BC'
                        },
                        'content': {
                            template: 'Choose option from menu...'
                        },
                        'footer': {
                            templateUrl: 'core/navigation/footer.view.html',
                            controller: 'FooterController',
                            controllerAs: 'FC'
                        }
                    }
                })
                .state('root.customers', {
                    abstract: true,
                    url: 'customers',
                    data: {
                        title: 'Customers',
                        breadcrumb: 'Customers'
                    }
                })
                .state('root.customers.list', {
                    url: '/list',
                    data: {
                        title: 'Customers list',
                        breadcrumb: 'List'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/customers/list/list.view.html',
                            controller: 'CustomersListController',
                            controllerAs: 'CLC'
                        }
                    }
                })
                .state('root.customers.edit', {
                    url: '/edit-customer/{id:int}',
                    data: {
                        title: 'Edit customer',
                        breadcrumb: 'Edit'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/customers/edit-customer/edit-customer.view.html',
                            controller: 'EditCustomerController',
                            controllerAs: 'ECC'
                        }
                    },
                    component: 'editCustomer',
                    resolve: {
                        customer: ['$stateParams', 'customersService', function($stateParams, customersService){
                            return customersService.getCustomer($stateParams.id).then(function(response) {
                                return response[0];
                            });
                        }]
                    }
                })
                .state('root.customers.add', {
                    url: '/add-customer',
                    data: {
                        title: 'Add Customer',
                        breadcrumb: 'Add Customer'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/customers/add-customer/add-customer.view.html',
                            controller: 'AddCustomerController',
                            controllerAs: 'ACC'
                        }
                    }
                });
        $translateProvider.useStaticFilesLoader({
          files: [{
            prefix: 'languages/locale-',
            suffix: '.json'
          }]
        });
        $translateProvider.useLocalStorage();

        $translateProvider.determinePreferredLanguage().fallbackLanguage('en');

        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    }
})();
