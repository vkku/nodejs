var http = require("http");
var fs = require("fs");
var path = require("path");

var port = 8001;
var server = http.createServer(function(req, res){
	console.log(`\nRequesting ${req.url} via ${req.method}`);
/*
	if(err)
			{
				console.log(err);
			}
			else
			{
				console.log("HTML Import Successfull");
				res.writeHead(200, {"Content-Type":"text/html"}); //Try adding callback function
				res.end(html);
			}
*/
	if(`${req.url}` === "/")
	{
		if(req.method === "GET"){
		//var formPath = path.join(__dirname, "public", req.url);
		//fs.readFile(formPath, function(err,html){
		//var formPath  = path.join(__dirname, "public", req.url);
		var fileStream = fs.createReadStream("/home/vkku/node/public/form.html", "UTF-8").pipe(res);
		}
		else if(req.method === "POST")
		{
			var body = "";
			req.on("data", function(chunk){
				body += chunk;
			});
			req.on("end", function(){
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(
			`
			<!DOCTYPE html>
			<title>Form Enteries</title>
			<h1>Form Results</h1>
			<p>${body}</p>
			</html>
			`);
			});
		}
	}
	else if(req.url.match(/.css$/))
	{
		res.writeHead(200, {"Content-Type":"text/plain"});
		var cssPath = path.join(__dirname, "public", req.url);
		var fileStream = fs.createReadStream(cssPath);
		fileStream.pipe(res);
	}
	else if(req.url.match(/.jpg$/))
	{
		res.writeHead(200, {"Content-Type":"image/jpeg"});
		var imgPath = path.join(__dirname, "public", req.url);
		var fileStream = fs.createReadStream(imgPath);
		fileStream.pipe(res);
	}
	else if(req.url.match(/.json$/))
	{
		res.writeHead(200, {"Content-Type":"text/json"});
		var jsonPath = path.join(__dirname, "public", req.url);
		var jsonStream = fs.createReadStream(jsonPath);
		jsonStream.pipe(res);
	}
	else
	{
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.end("Knock Knock! I don't know you, 404");
	}
}).listen(port);


console.log(`Listening on port : ${port}`);
