"use strict";


var fruitObj = function(){
	this.alive = []; //bool 
	this.x = [];
	this.y = [];
	this.l = []; // fruit image's length
	this.spd = [];
	this.fruitType = []; 
	this.orange = new Image();
	this.blue = new Image();
}
 
fruitObj.prototype.num = 30;

fruitObj.prototype.init = function(){
	for(var i=0; i<this.num; i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003;// [0.003, 0.02)]
		this.fruitType[i] = "";
	}

	this.orange.src = "./src/orange.png";
	this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function(){

	var pic;

	for(var i=0; i<this.num; i++){
		// 1) draw
		// 2) find an anemone, grow, fly up
		if(this.alive[i]){
			if(this.fruitType[i] == "blue"){
				pic = this.blue;
			}else{
				pic = this.orange;
			}

			if(this.l[i] <= 15){
				this.l[i] += this.spd[i] * deltaTime;
			}else{
				this.y[i] -= this.spd[i] * 3 * deltaTime;
			}

			ctx2.drawImage(pic,  this.x[i]- this.l[i]*0.5,  this.y[i]- this.l[i]*0.5,  this.l[i], this.l[i] );

			if(this.y[i]<10){
				this.alive[i] =false;
			}
		}
	}
}

fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random()* ane.num); //[0-49]
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight-ane.len[aneID];
	this.l[i] = 0;
	this.alive[i] = true;

	var ran = Math.random();
	if(ran < 0.2){
		this.fruitType[i] = "blue"; //orange, blue
	}else{
		this.fruitType[i] = "orange"
	}
}

fruitObj.prototype.dead = function(i) {
	this.alive[i]= false;
}

function fruitMonitor(){
	var num = 0;
	for(var i = 0; i < fruit.num; i++){
		if(fruit.alive[i]){
			num++;
		}
	}
	if(num <15){
		//send fruit
		sendFruit();
		return;
	}
}

function sendFruit(){
	for(var i=0; i<fruit.num; i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}







