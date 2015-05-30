var pokemonController = angular.module('pokemonController',[]);

app.controller('pokemonController', function($scope, $http) {

    $http.get("http://localhost:8080/pokemons").success(function(response) {
    	$scope.pokemons = response.pokemons;
    });


});