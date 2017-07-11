var fruitObj = function(){
	this.alive = []; //bool 
	this.x = [];
	this.y = [];
	this.l = []; // fruit image's length
	this.spd = [];
	this.orange = new Image();
	this.blue = new Image();
}
 
fruitObj.prototype.num = 30;

fruitObj.prototype.init = function(){
	for(var i=0; i<this.num; i++){
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.01 + 0.005;// [0.005, 0.015)]
		this.born(i);
	}

	this.orange.src = "./src/orange.png";
	this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function(){
	for(var i=0; i<this.num; i++){
		// 1) draw
		// 2) find an anemone, grow, fly up

		if(this.l[i] <= 15){
			this.l[i] += this.spd[i] * deltaTime;
		}else{
			this.y[i] -= this.spd[i] * 3 * deltaTime;
		}

		
		// ctx2.drawImage(this.orange, this.x[i]-this.orange.width*0.5, this.y[i]-this.orange.height*0.5);
		ctx2.drawImage(this.orange,  this.x[i]- this.l[i]*0.5,  this.y[i]- this.l[i]*0.5,  this.l[i], this.l[i] );
	}
}

fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random()* ane.num); //[0-49]
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight-ane.len[aneID];
	this.l[i] = 0;

}


fruitObj.prototype.update = function(){
	var num = 0;
	for(var i=0; i<this.num; i++){
		if(this.alive[i]){
			num++;
		}
	}
}