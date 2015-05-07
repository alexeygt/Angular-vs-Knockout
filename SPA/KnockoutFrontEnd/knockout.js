var express = require('express');
var app = express();
var path = require('path');
var port = 8082;

app.use(express.static(path.join(__dirname, 'src'))); //  "src" off of current is root

app.listen(port);
console.log('KnockoutJS SPA listening on port ' + port);
