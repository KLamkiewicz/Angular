var pokemonController = angular.module('pokemonsController',[]);

app.controller('allPokemons', function($scope, $http) {

    $http.get("http://localhost:8080/pokemons").success(function(response) {
    	$scope.pokemons = response.pokemons;
    });


});