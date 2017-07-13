"use strict";
var can1;
var can2;
var can3;

var canWidth;
var canHeight;

var ctx1;
var ctx2;
var ctx3;

var deltaTime;
var lastTime;

var bgPic = new Image();
bgPic.src = "./src/background.jpg";

var ane;
var fruit; 

var mom;

//the mouse's position
var mx;
var my;

document.body.onload = game;
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	can1 =document.getElementById("canvas1");	//fish, dust, UI circle
	ctx1=can1.getContext('2d');
	can2 =document.getElementById("canvas2");	//anemone, fruits
	ctx2=can2.getContext('2d');
	can3 =document.getElementById("canvas3");	//background
	ctx3=can3.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove, false);

	canWidth = can1.width;
	canHeight = can1.height;

	drawBackround();

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	mx = canWidth*0.5;
	my = canHeight*0.5;
}

function gameloop(){
	window.requestAnimFrame(gameloop);

	var now = Date.now();
	deltaTime = now -lastTime;
	lastTime = now;
	if(deltaTime>40){deltaTime = 40;}

	clearCan2();
	ane.draw();

	fruitMonitor();
	fruit.draw();

	clearCan1();
	mom.draw();

	momFruitsCollision();

}

function onMouseMove(e){
	if(e.offSetX || e.layerX){
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
	}
}















































