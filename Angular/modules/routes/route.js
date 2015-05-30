var route = angular.module("pokemonsRoute", ['ngRoute']);

route.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/route1', {
                templateUrl: 'home.html',
                controller: 'RouteController'
            }).
            when('/route2', {
                templateUrl: 'angular-route-template-2.jsp',
                controller: 'RouteController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);