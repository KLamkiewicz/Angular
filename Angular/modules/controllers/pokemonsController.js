var pokemonController = angular.module('pokemonsController',[]);


pokemonController.controller('allPokemons', function($scope, PokemonService) {
 	PokemonService.getPokemons(function(data){
 		$scope.filterType = "Bug";
 		$scope.pokemons = data.pokemons;
 	});
});

pokemonController.controller('addPokemon', function($scope, $location, PokemonService) {
	$scope.isValidated = true;
	$scope.pokemonForm = {};
	$scope.pokemonForm.addPokemonForm = function(item, event){
		
		if($scope.pokemon.name.length===0 || $scope.pokemon.type.length===0){
			console.log("0");
			$scope.isValidated = false;
		}else{
			$scope.isValidated = true;
		}

		if($scope.isValidated){
			PokemonService.addPokemon(function(data){},$scope.pokemon);
			$location.path('home');
		}
	}
});
