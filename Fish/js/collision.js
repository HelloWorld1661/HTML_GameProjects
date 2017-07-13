"use strict";

function momFruitsCollision(){
	console.log("htest on collision");
	for(var i=0; i<fruit.num; i++){
		if(fruit.alive[i]){
			//calculate length
			var l = getLength2(fruit.x[i],fruit.y[i], mom.x,mom.y);
			if(l < 900){
				//fruit.eaten
				fruit.dead(i);
			}

		}
	}
}