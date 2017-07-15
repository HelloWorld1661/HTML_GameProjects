"use strict";

function momFruitsCollision(){
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

//mom baby collision
function momBabyCollision(){
	var l  = getLength2(mom.x, mom.y, baby.x, baby.y)
	if(l < 900){
		//baby recover
		baby.babyBodyCount  = 0;
	}
}