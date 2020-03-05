
var express = require('express');
var app = express(); 						
var port = process.env.PORT || 3000; //do not change the port number				
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static('./public')); 	
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

app.get('/', function(req, res) {
    res.sendFile('public/index.html');
});


app.listen(port);
console.log("App listening on port " + port);
