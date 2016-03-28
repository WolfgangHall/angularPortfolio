var express = require('express');
var app = express();
var logger = require('morgan');

var port = process.env.PORT || 8080;

app.use(logger('dev'));

app.use(express.static('client'));

app.get('*', function(req, res){
  res.sendFile(process.cwd() +'/client/views/index.html');
});

app.listen(port, function(){
  console.log("Magic on Port " + port);
});