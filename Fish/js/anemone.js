"use strict";


var aneObj = function(){
	this.x = [];
	this.len = [];
}

aneObj.prototype.num=50;


aneObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		//Math.random()=>Return[0,1)]
		this.x[i]=i*16+Math.random()*20	//
		this.len[i]=200+Math.random()*50;
	}
}

aneObj.prototype.draw = function(){

	ctx2.save();
	// console.log("hello");
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap = "round";	//A rounded end cap is added to each end of the line
	ctx2.strokeStyle="purple";

	for(var i=0;i<this.num;i++){
		//beginPath,moveTo,LineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHeight);
		ctx2.lineTo(this.x[i], canHeight-this.len[i]); 
		ctx2.stroke();
	}
	ctx2.restore();
}