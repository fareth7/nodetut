var http = require('http');
var url = require('url');

const CONTENT_TYPE = "Content-Type";
const TEXT_PLAIN = "text/plain";

function start(route, handle){ 
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request for"+ pathname + " received");             
        route(handle, pathname, response); 
    }
    
    http.createServer(onRequest).listen(8888); 
    console.log("Server has started.");
}
exports.start = start;
