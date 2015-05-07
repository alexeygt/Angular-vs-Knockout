var express = require('express');
var app = express();
var path = require('path');
var port = 8081;

app.use(express.static(path.join(__dirname, 'app'))); //  "app" off of current is root

app.listen(port);
console.log('AngularJS SPA listening on port ' + port);
