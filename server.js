'use strict';

const express  = require('express'),
  app          = express(),
  port         = process.env.PORT || 8000,
  bodyParser   = require('body-parser'),
  routes       = require('./app/routes.js');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set public directories
app.use('/public', express.static(__dirname + '/public'));

// Set the routes
app.use(routes);


app.listen(port, function() {
  console.log('Server running on port ' + port);
});
