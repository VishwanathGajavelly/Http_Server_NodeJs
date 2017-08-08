var http = require("http");

var port = 9000;

function getHome(req, resp) {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("<html><html><head><title>Home</title></head><body>Want to some calculation? Click <a href='/calc'>here</a></body></html>");
    resp.end();
}




function get404(req, resp) {
    resp.writeHead(404, "Resource Not Found", { "Content-Type": "text/html" });
    resp.write("<html><html><head><title>404</title></head><body>404: Resource not found. Go to <a href='/'>Home</a></body></html>");
    resp.end();
}

function get405(req, resp) {
    resp.writeHead(405, "Method not supported", { "Content-Type": "text/html" });
    resp.write("<html><html><head><title>405</title></head><body>405: Method not supported</body></html>");
    resp.end();
}



http.createServer(function(req,resp){

    // console.log(req.url); -> returns the whole query parameters.
    switch(req.method) {
        case "GET": 
            if (req.url === "/") {
                getHome(req, resp);
            }
            else if (req.url === "/calc") {
           
            }
            else {
                get404(req, resp);
            }
            break;
        case "POST":
            break;
       default:
            get405(req, resp);
            break;
    }
        resp.end();

}).listen(port);


