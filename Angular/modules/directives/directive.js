var module = angular.module('pokemonsDirective',[]);

module.directive('showPokemon', function(){
	return {
		template: '<img src="{{pictureHov}}" style="margin-top:{{currentPosition}}"/>'
	}
});