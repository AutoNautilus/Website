var static = require('node-static');
const http = require('http');
var file = new(static.Server)();
const hostname = '174.136.98.106';
const port = 5000;
http.createServer(function (req, res) {
	file.serve(req,res);
}).listen(port);

