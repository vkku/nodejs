//https request
var https = require("https");
var fs = require("fs");

var options = {
hostname: "en.wikipedia.org",
port: 443,
path: "/wiki/Narendra_Modi",
method: "GET"
};

var response = '';

var request = https.request(options, function(res){
	console.log(`\nServer Response Started`);
	console.log(`\nServer Status -> ${res.statusCode}`);
	console.log("\nServer Headers %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk){
		console.log(chunk);
	});

	res.on("data", function(chunk){
		console.log(`\nChunk size : ${chunk.length} bytes`);
		response += chunk;
	});

	res.on("end", function(){
		console.log("Response Complete");
		fs.writeFile("wikiLogs.txt", response, function(err, data){
			if(err)
			{
				throw err;
			}
			console.log("Log Complete");
		});
	});

});
request.on("error", function(err){
	if(err)
		console.log(`\nError serving request : ${err.message}`);
});

request.end();

