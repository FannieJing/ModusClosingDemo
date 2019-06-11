var http = require('http');

var express = require('express');

var app = express();

var routes = require('./routes');
app.use(express.urlencoded());
app.use(express.json());

routes.init(app);

var server = http.createServer(app);

server.listen(3000,()=>{
	console.log('The server has been started on port 3000.');
})