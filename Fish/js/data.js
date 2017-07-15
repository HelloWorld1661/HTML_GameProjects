"use strict";

var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;

}

dataObj.prototype.reset = function(){
	this.fruitNum = 0;
	this.double = 1;
}

dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	ctx1.fillStyle ="white";
	ctx1.fillText("Num" + this.fruitNum, w* 0.5, h-50);
	ctx1.fillText("Double" + this.double, w* 0.5, h-80); 
}