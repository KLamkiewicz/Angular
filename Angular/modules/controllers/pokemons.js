app.controller('pokemonController', function($scope, $http) {
    $scope.pokemons = [
    	{name:'bulbasaur', type:'grass'},
    	{name:'pikachu', type:'electric'},
    	{name:'charmander', type:'fire'}
    ];

    $http.get("http://localhost:8080/pokemons").success(function(response) {
    	$scope.test = response.pokemons;
    });
});