var module = angular.module("pokemonDBService", []);

module.service('PokemonService', ['$http','$rootScope', function($http){

	var service = {};

    // $http.get("http://localhost:8080/pokemons").success(function(response) {
    // 	service.pokemons = response.pokemons;
    // });

    // this.getPokemons = function(){
    // 	return service.pokemons;
    // }
       this.getPokemons = function(callback){
          $http.get('http://localhost:8080/pokemons').success(function(data) {
          // prepare data here
          callback(data);
        });
      }
}]);