//step:1
var http = require("http");
//step:2
http.createServer(function (request, response) 
{
    //step:3
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello Rushi!');
}).listen(8081);
    
// Console will print the message
console.log('Server running at http://localhost:8081/');
