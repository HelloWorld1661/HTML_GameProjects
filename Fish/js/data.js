"use strict";

var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
}

// dataObj.prototype.reset = function(){
// 	this.fruitNum = 0;
// 	this.double = 1;
// }

dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	
	// ctx1.fillText("Num" + this.fruitNum, w* 0.5, h-50);
	// ctx1.fillText("Double" + this.double, w* 0.5, h-80); 

	ctx1.fillText("Score" + this.score, w* 0.5, h-20); 
}

dataObj.prototype.addScore = function(){
	this.score += this.fruitNum * 10 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}