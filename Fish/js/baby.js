"use strict";

var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEys = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}

babyObj.prototype.init = function(){
	this.x = canWidth*0.5 - 50;
	this.y = canHeight*0.5 + 50;
	this.angle = 0;
	this.babyEys.src = "./src/babyEye0.png";
	this.babyBody.src ="./src/babyFade0.png";
	this.babyTail.src ="./src/babyTail0.png";
}

babyObj.prototype.draw = function(){
	//draw on the canvas1  ==> use ctx1
	// 1) draw baby fish
	// 2) move with mom fish

	//lerp  x, y
	this.x = lerpDistance(mom.x, this.x,0.98);
	this.y = lerpDistance(mom.y, this.y,0.98);

	//delta angle
	//Math.atan2(y,x)
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI; // -π, π

	//lerp angle
	this.angle = lerpAngle(beta, this.angle, 0.9); 

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail,  -this.babyTail.width*0.5+25,  -this.babyTail.height*0.5);
	ctx1.drawImage(this.babyBody,  -this.babyBody.width*0.5,  -this.babyBody.height*0.5);
	ctx1.drawImage(this.babyEys, -this.babyEys.width*0.5,  -this.babyEys.height*0.5);
	ctx1.restore();

}