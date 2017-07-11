
var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var bgPic = new Image();

document.body.onload = game;
function game(){
	init();
	gameloop();
}

function init(){
	 can1 =document.getElementById("canvas1");	//fish, dust, UI circle
	 ctx1=can1.getContext('2d');
	 can2 =document.getElementById("canvas2");	//background
	 ctx2=can2.getContext('2d');

	 bgPic.src = "src/background.jpg";
	 
	 canWidth = can1.width;
	 canHeight = can1.height;

	 drawBackround()

}

function gameloop(){
	// requestAnimFrame(gameloop);
	console.log("loop");
}