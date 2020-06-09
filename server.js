var express = require('express');
var port = process.env.PORT || 8080;

var app = express();


//Serves all the request which includes /images in the url from Images folder
app.use(express.static(process.cwd()));

var server = app.listen(8080);