var pokemonController = angular.module('pokemonsController',[]);


pokemonController.controller('allPokemons', function($scope, PokemonService) {
	console.log("Get pokemons");

 	PokemonService.getPokemons(function(data){;
 		$scope.pokemons = data.pokemons;
 	});
});

pokemonController.controller('addPokemon', function($scope, PokemonService) {
	//$scope.pokemons = PokemonService.getPokemons();
	console.log("ADD");
});
