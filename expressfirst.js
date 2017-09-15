//step1
var express = require('express');
var app = express();

//step2
app.get('/', function (req, res) {
   res.send('Hello World');
})

//step3
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})