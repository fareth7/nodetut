const FUNCTION_TYPE = 'function';

function route(handle, pathname, response){
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname]===FUNCTION_TYPE){
        return handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(200, {CONTENT_TYPE : TEXT_PLAIN});
        response.write(pageContent);
        response.end();
        return "404 Not found";
    };
};

exports.route = route;