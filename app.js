var express = require('express');
var bodyParser=require('body-parser');
var path = require('path');

//Load routes for api
var routes = require('./api/routes');

var app = express();

//Configuration
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);

app.listen(7000,function(){
	console.log("NodeJS runnning in port 7000");
});