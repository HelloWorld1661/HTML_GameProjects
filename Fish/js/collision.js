"use strict";

function momFruitsCollision(){
	for(var i=0; i<fruit.num; i++){
		if(fruit.alive[i]){
			//calculate length
			var l = getLength2(fruit.x[i],fruit.y[i], mom.x,mom.y);
			if(l < 900){
				//fruit.eaten
				fruit.dead(i);
				data.fruitNum++;
				mom.momBodyCount++;
				if(mom.momBodyCount > 7){
					mom.momBodyCount = 7;
				}
				if(fruit.fruitType[i] =="blue")//blue fruits
				{
					data.double = 2;
				}
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
		//data -> 0
		data.reset();
		mom.momBodyCount =0;
	}
}