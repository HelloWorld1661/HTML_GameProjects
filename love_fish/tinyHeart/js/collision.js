// 鱼妈妈和果实碰撞检测
function momFruitsCollision() {
    if (data.gameOver) return;
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            var l = calLength2(fruit.disX[i], fruit.disY[i], mom.disX, mom.disY);
            if (l < 900) {
                fruit.dead(i);
                data.fruitNum++;
                mom.momBodyCount++;
                if (mom.momBodyCount > 7) mom.momBodyCount = 7;
                if (fruit.fruitType[i] == 'blue') {
                    data.double = 2;
                }
                wave.born(fruit.disX[i], fruit.disY[i]);
            }
        }
    }
}

// 鱼妈妈碰撞鱼宝宝
function momBabyCollision() {
    if (data.gameOver) return;
    var l = calLength2(mom.disX, mom.disY, baby.disX, baby.disY);
    if (l < 900 && data.fruitNum > 0) {
        baby.babyBodyCount = 0;
        mom.momBodyCount = 0;
        data.addScore();
        data.reset();
        halo.born(baby.disX,baby.disY);
    }
}
