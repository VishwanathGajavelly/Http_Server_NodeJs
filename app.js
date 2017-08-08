var http = require("http");

var port = 9000;

http.createServer(function(req,resp){

    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write("<html> <body> <strong> Hello World </strong></body> </html>");

    resp.end();


}).listen(port);

