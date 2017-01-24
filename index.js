var http = require('http')

http.createServer(function(req, res) {
res.writeHead(200, {'content-type':'text/plain'});
res.end('Hello world!');
}).listen(9001);

console.log('server is up on 9001');