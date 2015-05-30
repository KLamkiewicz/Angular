var express    = require('express');     
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        
var router = express.Router();            


var database = {
	'pokemons': [
		{name:'bulbasaur', type:'grass'},
		{name:'pikachu', type:'electric'},
		{name:'charmander', type:'fire'},
		{name:'raichu', type:'electric'},
		{name:'lugia', type:'water'},
		{name:'charwizard', type:'fire'},
		{name:'venusaur', type:'grass'},
		{name:'zapdos', type:'electric'},
		{name:'growlite', type:'fire'}
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