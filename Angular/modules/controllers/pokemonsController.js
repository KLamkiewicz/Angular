var pokemonController = angular.module('pokemonsController',[]);


pokemonController.controller('allPokemons', function($scope, PokemonService) {
	$scope.pictureHov = "";
	$scope.currentPosition = 100;
 	PokemonService.getPokemons(function(data){
 		$scope.filterType = "";
 		$scope.pokemons = data.pokemons;
 	});
 	

 	$scope.setPicture = function(val){
 		$scope.pictureHov = val;
 	}

 	$scope.getPosition = function(event){
   		$scope.currentPosition= event.pageY-200;
 	}
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
