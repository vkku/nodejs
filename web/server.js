var http = require("http");
var server = http.createServer(function(req, res){
	//res.writeHead(200, {"Content-Type": "text / plain"});
	//res.end("Response OK");
	res.writeHead(200, {"Content-Type": "text / html"});
	res.end(`
	<!DOCTYPE html>
	<h1>vkku's personal webserver</h1>
	<h3>FOSS brat<h3>
	<p>Thanks for visiting vkku's server</p>
	<p>Serving : ${req.url} via ${req.method}</p>
	</html>
	`);
});

var port = 8001;

server.listen(port);

console.log("Server Listening on port : " + port);


