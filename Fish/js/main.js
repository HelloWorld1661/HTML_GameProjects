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
var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

var baby
var babyTail = [];
var babyEye = [];
var babyBody = [];

var data;
var wave;

var halo;




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

	baby = new babyObj();
	baby.init(); 

	mx = canWidth*0.5;
	my = canHeight*0.5;
	// baby fish
	for(var i=0; i<8; i++){
		babyTail[i] = new Image(); 
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}
	for(var i=0; i<2; i++){
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye" + i + ".png";
	}
	for(var i=0; i<20; i++){
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";
	}
	// mom fish 
	for(var i=0; i<8; i++){
		momTail[i] = new Image(); 
		momTail[i].src = "./src/bigTail" + i + ".png";
	}
	for(var i=0; i<2; i++){
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye" + i + ".png";
	}

	data = new dataObj(); 

	for(var i=0; i<8; i++){
		momBodyOra[i] = new Image(); 
		momBodyBlue[i] = new Image(); 
		momBodyOra[i].src = "./src/bigSwim" + i + ".png";
		momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	}

	//for drawing score
	ctx1.font ="30px Roboto";
	ctx1.textAlign = "center"; //left, center, right

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();
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
	baby.draw();

	momFruitsCollision();
	momBabyCollision();

	data.draw();

	wave.draw();
	
	halo.draw();
	



}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offSetX || e.layerX){
			mx = e.offsetX == undefined ? e.layerX : e.offsetX;
			my = e.offsetY == undefined ? e.layerY : e.offsetY;
		}
	}
	
}















































