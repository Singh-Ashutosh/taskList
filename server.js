//Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//Initialization variables
var index = require('./routes/index');
var task = require('./routes/tasks');
var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder To hold Angular 2 stuff
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use('/', index);
app.use('/api', task);

//Run Server
app.listen(port, function () {
    console.log('Server started at port ' + port);
});