var BabyObj = function () {
    this.disX, this.disY, this.angle;

    this.babyTails = [];
    this.babyTailsTimer = 0;
    this.babyTailsCount = 0;

    this.babyEyes = [];
    this.babyEyesTimer = 0;
    this.babyEyesCount = 0;
    this.babyEyesInterval = 1000; // 眨眼时间间隔

    this.babyBody = [];
    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;

};

BabyObj.prototype.init = function () {
    // 鱼宝宝初始位置
    this.disX = cW * 0.5 - 50, this.disY = cW * 0.5 + 50;

    // 角度差
    this.angle = 0;

    for (var i = 0; i < 8; i++) {
        this.babyTails[i] = new Image();
        this.babyTails[i].src = "./images/babyTail" + i + ".png";
    }

    for (var i = 0; i < 2; i++) {
        this.babyEyes[i] = new Image();
        this.babyEyes[i].src = "./images/babyEye" + i + ".png";
    }

    for (var i = 0; i < 20; i++) {
        this.babyBody[i] = new Image();
        this.babyBody[i].src = "./images/babyFade" + i + ".png";
    }
};

BabyObj.prototype.draw = function () {

    // 鱼宝宝趋向鼠标位置 (运动速度)
    this.disX = lerpDistance(mom.disX - 35, this.disX, 0.98);
    this.disY = lerpDistance(mom.disY - 35, this.disY, 0.98);

    // 坐标差
    var deltaY = mom.disY - this.disY;
    var deltaX = mom.disX - this.disX;

    // 角度差
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;

    // 鱼宝宝朝向趋向鼠标 (转向速度)
    this.angle = lerpAngle(beta, this.angle, 0.6);

    // 鱼宝宝尾巴
    this.babyTailsTimer += deltaTime;
    if (this.babyTailsTimer > 50) {
        this.babyTailsCount = (this.babyTailsCount + 1) % 8;
        this.babyTailsTimer %= 50;
    }

    // 鱼宝宝眼睛
    this.babyEyesTimer += deltaTime;
    if (this.babyEyesTimer > this.babyEyesInterval) {
        this.babyEyesCount = (this.babyEyesCount + 1) % 2;
        this.babyEyesTimer %= this.babyEyesInterval;

        // 鱼宝宝眨眼
        if (this.babyEyesCount == 0) {
            this.babyEyesInterval = Math.random() * 1500 + 2000; // [2000,3500)
        } else {
            this.babyEyesInterval = 230;
        }
    }

    // 鱼宝宝身体
    this.babyBodyTimer += deltaTime;
    if (this.babyBodyTimer > 300) {
        this.babyBodyCount = this.babyBodyCount + 1;
        this.babyBodyTimer %= 300;

        if (this.babyBodyCount > 19) {
            this.babyBodyCount = 19;
            // game over
            data.gameOver = true;
        }
    }

    ctx1.save();
    ctx1.translate(this.disX, this.disY);

    // 旋转鱼宝宝
    ctx1.rotate(this.angle);

    ctx1.drawImage(this.babyTails[this.babyTailsCount], -this.babyTails[this.babyTailsCount].width * 0.5 + 24, -this.babyTails[this.babyTailsCount].height * 0.5);
    ctx1.drawImage(this.babyBody[this.babyBodyCount], -this.babyBody[this.babyBodyCount].width * 0.5, -this.babyBody[this.babyBodyCount].height * 0.5);
    ctx1.drawImage(this.babyEyes[this.babyEyesCount], -this.babyEyes[this.babyEyesCount].width * 0.5, -this.babyEyes[this.babyEyesCount].height * 0.5);
    ctx1.restore();
};
