var express    = require('express');     
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        
var router = express.Router();            


var database = {
	'pokemons': [
		{id:"001", name:'Bulbasaur', type:'Grass', img:'../pictures/001.jpg'},
		{id:"002", name:'Ivysaur', type:'Grass', img:'../pictures/002.jpg'},
		{id:"003", name:'Venusaur', type:'Grass', img:'../pictures/003.jpg'},
		{id:"004", name:'Charmander', type:'Fire', img:'../pictures/004.jpg'},
		{id:"005", name:'Charmeleon', type:'Fire', img:'../pictures/005.jpg'},
		{id:"006", name:'Charizard', type:'Fire', img:'../pictures/006.jpg'},
		{id:"007", name:'Squirtle', type:'Water', img:'../pictures/007.jpg'},
		{id:"008", name:'Wartortle', type:'Water', img:'../pictures/008.jpg'},
		{id:"009", name:'Blastoise', type:'Water', img:'../pictures/009.jpg'},
		{id:"010", name:'Caterpie', type:'Bug', img:'../pictures/010.jpg'},
		{id:"011", name:'Metapod', type:'Bug', img:'../pictures/011.jpg'},
		{id:"012", name:'Butterfree', type:'Bug', img:'../pictures/012.jpg'},
		

		// {name:'pikachu', type:'electric'},
		// {name:'charmander', type:'fire'},
		// {name:'raichu', type:'electric'},
		// {name:'lugia', type:'water'},
		// {name:'charwizard', type:'fire'},
		// {name:'venusaur', type:'grass'},
		// {name:'zapdos', type:'electric'},
		// {name:'growlite', type:'fire'}
	]
};


app.use('/', router);

router.get('/pokemons', function(req, res) {
    res.json(database);   
});

router.post('/add', function(req, res){	
	database.pokemons.push(req.body);
	console.log(database);
	console.log(req.body);
});





app.listen(port);
console.log('Magic happens on port ' + port);