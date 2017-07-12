
var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var deltaTime;
var lastTime;

var bgPic = new Image();

var ane;
var fruit; 

var mom;

document.body.onload = game;
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
}

function init(){
	can1 =document.getElementById("canvas1");	//fish, dust, UI circle
	ctx1=can1.getContext('2d');
	can2 =document.getElementById("canvas2");	//anemone, fruits
	ctx2=can2.getContext('2d');
	can3 =document.getElementById("canvas3");	//background
	ctx3=can3.getContext('2d');

	bgPic.src = "src/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	drawBackround();

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();



	window.setTimeout(gameloop, 35);
}

function gameloop(){
	window.setTimeout(gameloop, 1000 / 60);
	var now = Date.now();
	deltaTime = now -lastTime;
	lastTime = now;

	clearCan2();
	ane.draw();

	fruitMonitor();
	fruit.draw();

	clearCan1();
	mom.draw();

}

















































