var FruitObj = function () {
    // 果实状态 true | false
    this.alive = [];

    // 果实出生位置
    this.disX = [];
    this.disY = [];

    // 果实成长速度,上浮速度
    this.spd = [];

    // 果实大小
    this.size = [];

    // 果实类型
    this.fruitType = [];

    // 果实
    this.orange = new Image();

    this.blue = new Image();

    this.aneNum = [];
};

FruitObj.prototype.num = Math.floor(clientW / 53);

FruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.disX[i] = 0;
        this.disY[i] = 0;

        this.fruitType[i] = "";

        // 设置果实出生位置
        this.aneNum[i] = 0;

        // 初始化果实,全部出生
        //this.born(i);

        // 果实成长速度,上浮速度 0.01~0.015
        this.spd[i] = Math.random() * 0.01 + 0.005;
    }

    this.orange.src = './images/orange.png';
    this.blue.src = './images/blue.png';
};

FruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        // 判断果实状态
        if (this.alive[i]) {

            // 判断果实类型
            var pic = this.fruitType[i] == 'blue' ? this.blue : this.orange;

            // 限制果实大小
            if (this.size[i] <= 14) {
                var num = this.aneNum[i];
                this.disX[i] = ane.headX[num];
                this.disY[i] = ane.headY[num];
                this.size[i] += this.spd[i] * deltaTime;
            } else {
                this.disY[i] -= this.spd[i] * 7 * deltaTime;
            }
            // 绘制果实
            ctx2.drawImage(pic, this.disX[i] - this.size[i] * 0.5, this.disY[i] - this.size[i] * 0.5, this.size[i], this.size[i]);


            if (this.disY[i] < 10) {
                this.alive[i] = false;
            }

        }
    }
};

FruitObj.prototype.born = function (i) {
    // 找到海葵
    this.aneNum[i] = Math.floor(Math.random() * ane.num);

    // 随机生成果实类型
    this.fruitType[i] = Math.random() < 0.2 ? 'blue' : 'orange';

    this.alive[i] = true;

    this.size[i] = 0;
};

// 被吃掉的果实
FruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
};

FruitObj.prototype.updata = function () {
    var num = 0;
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) num++;
    }
};

// 检测已出生的果实
function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) num++;
    }
    if (num < fruit.num) {
        // console.log(fruit.num);
        sendFruit();
        return;
    }
}

// 判断果实状态
function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);
            return;
        }
    }
}
