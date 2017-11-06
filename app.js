//console.log(process.argv);
/*
function grab(flag)
{
	var index = process.argv.indexOf(flag);
	return(index == -1) ? null : process.argv[index+1];
}

var user = grab('--user');
var greeting = grab('--greeting');

if(!user || !greeting)
{
 console.log('Can verbose be powerful');
}
else
{
 console.log(`Hello ${user}, ${greeting}`);
}
*/

/*
//Example 2
var que = [
"What's your name ?",
"Your Age ?",
"Hobby ?"
]; 

var ans = [];

function ask(i)
{
	process.stdout.write(`\n\n\n ${que[i]} > `);
}

process.stdin.on('data', function(data)
{
	ans.push(data.toString().trim());
	//process.stdout.write(data.toString().trim() + "\n\n");
	if(ans.length < que.length)
	{
		ask(ans.length);
	}
	else
	{
		process.exit();
	}
});

process.on('exit', function()
{
	process.stdout.write('\n\n\n');
	process.stdout.write(`${ans[0]} loves ${ans[2]} at the age of ${ans[1]} \n\n`);
});

ask(0);
*/

/*
//Program 3 - Timer
var timeoutms = 3000;
var currentTime = 0;
var percentageCompleted = 0;
var intervalms = 70;

function waitingPercentage(p)
{
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	if(p < 100)
		process.stdout.write(`waiting ... ${p}% Completed`);
	else
		process.stdout.write(`${p}% Completed`);
}

var halfSecondInterval = setInterval(function(){
	currentTime += intervalms;
	percentageCompleted = Math.floor((currentTime/timeoutms) * 100);
	waitingPercentage(percentageCompleted);	//Remember Async
	//console.log(`${currentTime/1000} Second/s \nwaiting ...`);

}
,intervalms);
setTimeout(function()
{
	waitingPercentage(100);
	clearInterval(halfSecondInterval);
	process.stdout.write("\nProcess Complete\n");

},timeoutms);

waitingPercentage(percentageCompleted);
*/

/*
//Program 4 - Core Modules

var path = require("path");
var util = require("util");
var v8 = require("v8");
//process.stdout.write(path.basename(__filename));
util.log(path.basename(__filename));

var uploadDir = path.join(__dirname, 'www', 'public', 'uploads');

//process.stdout.write(`\n${uploadDir}\n`);
util.log(uploadDir);
util.log(v8.get0HeapStatistics());

*/

/*
//Program 5 - Readline
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '',
	sayings: []
}

rl.question("Name a famous Personality ?\n", function(answer)
 {
	realPerson.name = answer;
	rl.setPrompt(`What does ${realPerson.name} say ?\n`);
	rl.prompt();
	rl.on('line', function(answer){
	realPerson.sayings.push(answer.trim());
	//console.log(`\n${realPerson.name} says ${answer}\n`);
	if(answer.toLowerCase().trim() === 'exit')
	{
		rl.close();
	}
	rl.setPrompt(`What else do ${realPerson.name} say ?, (press 'exit' to leave)\n`);
	rl.prompt();

	});
 });

rl.on('close', function()
{
	console.log("%s says %j",realPerson.name, realPerson.sayings);
	process.exit();
});

*/


//Program 6 - EventEmitter
/*
var events = require("events");
var emitter = new events.EventEmitter();

emitter.on('customEvent', function(status, message)
{
 console.log(`${status} with ${message}`);
});


emitter.emit('customEvent', 200, "In Progress");
*/

/*
//Subprogram 6 - EventEmitter inherit

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var person = function(name){
this.name = name;
}

util.inherits(person, EventEmitter);
var vkku = new person("vkku");
//util.inherits(person, EventEmitter);

vkku.on('speak', function(says){
	console.log(`${this.name} says ${says}`);
});

vkku.emit('speak', "Revengers spread the harmony, yet Again !!");

*/

/*
//Program 7 - exec
var exec = require("child_process").exec;

exec("ls", function(err, data){
	if(err)
	{
		throw err;
	}
	console.log(data);
});
*/

/*
//Program 8 - spawn
var spawn = require("child_process").spawn;

var cp = spawn("nodejs", ["continuos"]);

cp.stdout.on('data', function(data){
	console.log(`\nSTDOUT -> ${data.toString()}`);
});


//process.stdin.on('data', function(data){
//	console.log(`\nSTDIN -> ${data}`);
//	process.exit();
//});


cp.on('close', function(data){
	console.log("Child Process Ended");
	process.exit();
});

setTimeout(function(){
	cp.stdin.write("stop");
}, 3000);
*/

/*
//Program 9 - Listing Files
var fs = require("fs");

//var files = fs.readdirSync("Downloads");	//Use Wisely - Synchronous
//console.log(files);
fs.readdir("Downloads", function(err, data){
	if(err)
	{
		throw err;
	}
	else
	{
		console.log(data);
	}
});
console.log("Reading Files ...");
*/

/*
//Program 10 - File Stats
var fs = require("fs");
var path = require("path");
//var content = fs.readFileSync("continuos.js", "UTF-8");

//fs.readFile("continuos.js", "UTF-8", function(err, content){
//	if(err)
//	{
//		//throw err;  //Aborts the process
//		console.log(err);
//	}
//	console.log(content);
//});


fs.readdir("Downloads", function(err, files){
	files.forEach(function(fileName) {
		var file = path.join(__filename);
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName != ".DS_Store")
		{
			fs.readFile(file, "UTF-8", function(err, content)
			{
				console.log(content);
			});
		}

});
});

*/

/*
//Program 11 - Creating File
var fs = require("fs");
var md =
`========================
 * Point to be noted
 * Yet another point to be noted
 ------------------------
`;

fs.writeFile("notes.md", md.trim(), function(err){
	console.log("File Created Successfully");
});
*/

//Program 12 - Create Directory
var fs = require("fs");
/*
if(fs.existsSync("lib")){
	console.log("Directory Exists");
}
else
{
	fs.mkdir("lib", function(err){
	if(err)
		throw err;
	console.log("Directory Created");
});
*/
/*
fs.unlink("halo", function(err){
	if(err)
		console.log(err);
	console.log("Delete Successfull");
});
*/

stream = fs.createReadStream("app.js.save", "UTF-8");
var data = '';

stream.once('data', function(){
	console.log("\n\n\n");
	console.log("Started Chunking * * * ");
	console.log("\n\n\n");
});

stream.on('data', function(chunk){
	console.log(`\nChunk -> ${chunk.length} bytes ||`);
	data += chunk;
	});

stream.on('end', function(){
	console.log("\n\n\n");
	console.log(`\n* * * Completed Reading File -> ${data.length} bytes * * * `);
	console.log("\n\n\n"); 
});




















