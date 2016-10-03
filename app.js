
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// the ExpressJS App
var app = express();

// configuration of expressjs settings for the web server.

// server port number
app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

// connecting to database
app.db = mongoose.connect('mongodb://127.0.0.1:27017/selfit_db');
console.log("connected to database");

/**
 * CORS support for AJAX requests
 */

app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'PUT');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

// api baseURI is at /api/

// API Routes

// CREATE - http://appname.com/api/create (POST)
// RETRIEVE 1 - http://appname.com/api/get/:id (GET)
// RETRIEVE ALL - http://appname.com/api/get (GET)
// UPDATE - http://appname.com/api/update/:id (PUT)
// DELETE - http://appname.com/api/delete/:id (DELETE)

// ROUTES




// Shows status on root page
var routes = require('./routes/index.js');
app.get('/', routes.index); // calls index function in /routes/index.js


// API routes
var item_routes = require('./routes/item.js'); // add file dependencies
//app.get('/api/item/:id',item_routes.getOne);// API create route and callback (see /routes/item.js) and elses
   // app.get('/api/item', item_routes.getAll);// API retrieve all route and callback (see /routes/item.js)and elses
// app.get('/api/item/:color', item_routes.getColor);
app.get('/api/item', item_routes.getEjemplo);


//app.put('/api/item/:id', item_routes.update); // API update route and callback (see /routes/item.js) and elses
//app.delete('/api/item/:id', item_routes.remove); // API delete route and callback (see /routes/item.js)-







// if route not found, respond with 404
app.use(function(req, res, next){

	var jsonData = {
		status: 'ERROR',
		message: 'Sorry, we cannot find the requested URI'
	}
	// set status as 404 and respond with data
  res.status(404).send(jsonData);

});

// create NodeJS HTTP server using 'app'
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
