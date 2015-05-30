var route = angular.module("pokemonsRoute", ['ngRoute']);

route.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/pokemons', {
                templateUrl: 'pokemons.html',
                controller: 'allPokemons'
            }).
            when('/addPokemon', {
                templateUrl: 'pokemonForm.html',
                controller: 'addPokemon'
            }).
            when('/home', {
                templateUrl: 'welcome.html'
            }).
            otherwise({
                templateUrl: 'welcome.html',
                redirectTo: '/'
            });
    }]);