var express = require('express');
//
var app = express();

app.get('/', function (req, res) {
  res.send('hello world 6');
});

app.listen(process.env.PORT || 5000);
//console.log("Action at port 5000");

module.exports = app;
