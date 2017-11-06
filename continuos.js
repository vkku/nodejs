var interceptedMsg = [
"Hello !",
"I Am vkku",
"From extraterrestial galaxy",
"of acruoduos",
"we're having earth as proxy"
];

var continuos = setInterval(function(){
var i = Math.floor(Math.random() * interceptedMsg.length);
process.stdout.write("\n" + interceptedMsg[i]);
}, 1000);

process.stdin.on('data', function(data){
clearInterval(continuos);
console.log(`\nSTDIN Received -> ${data}`);
process.exit();
});

