var express = require('express');
var bodyParser=require('body-parser');
var path = require('path');

//Load routes for api
var routes = require('./api/routes');

var app = express();
app.set('port',(process.env.PORT) || 7000);

//Configuration
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);

app.listen(app.get('port'),function(){
	console.log("NodeJS runnning in port 7000");
});
