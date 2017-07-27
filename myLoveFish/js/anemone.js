"use strict";


var aneObj = function(){
	//start point, control point, end point(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = []; //振幅
	this.alpha = 0; //sin
}

aneObj.prototype.num=50;

aneObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		//Math.random()=>Return[0,1)]
		this.rootx[i]=i * 16 + Math.random() * 20//[0,1)
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 + Math.random() * 50;
		this.amp[i] =Math.random() * 50 + 50;
	}
}

aneObj.prototype.draw = function(){

	this.alpha += deltaTime * 0.0005;
	var l = Math.sin(this.alpha); //[-1, 1]
	ctx2.save();
	// console.log("hello");
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap = "round";	//A rounded end cap is added to each end of the line
	ctx2.strokeStyle="purple";

	for(var i=0;i<this.num;i++){ 
		//beginPath,moveTo,LineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i];
											  //控制点
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]); 
		ctx2.stroke();
	}
	ctx2.restore();
}