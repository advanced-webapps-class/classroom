
// server.js
var http = require('http');

http.createServer(function (req, res) {
  console.log(req.요청한);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
