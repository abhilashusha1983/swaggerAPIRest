'use strict';
var port = process.env.PORT || 8000; // first change

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var swaggerUi = require('swaggerize-ui'); // second change
var Swaggerize = require('swaggerize-express');
var Path = require('path');

var App = Express();

var Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
    api: Path.resolve('./config/api.json'),
    handlers: Path.resolve('./handlers'),
	docspath: '/swagger'
}));

App.use('/docs', swaggerUi({
  docs: '/swagger'  
}));


Server.listen(port, function () {
     });
