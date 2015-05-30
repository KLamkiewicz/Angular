var module = angular.module("pokemonDBService", []);

	module.service('PokemonService', ['$http','$rootScope', function($http){

		this.getPokemons = function(callback){
			$http.get('http://localhost:8080/pokemons').success(function(data) {
				callback(data);
			});
		}

		this.addPokemon = function(callback,dataToSend){
			$http.post('http://localhost:8080/add', dataToSend).success(function(data){
				callback(data);
			});
		}
	}

]);
