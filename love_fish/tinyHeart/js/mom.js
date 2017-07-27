var MomObj = function() {
    this.disX, this.disY, this.angle;

    this.momEyes = [];
    this.momEyesCount = 0;
    this.momEyesTimer = 0;
    this.momEyesInterval = 1000;

    this.momBodyOrange = [];
    this.momBodyBlue = [];
    this.momBodyCount = 0;

    this.momTails = [];
    this.momTailsCount = 0;
    this.momTailsTimer = 0;
};

MomObj.prototype.init = function() {
    // 鱼妈妈初始位置
    this.disX = cW * 0.5, this.disY = cW * 0.5;

    // 角度差
    this.angle = 0;

    for (var i = 0; i < 8; i++) {
        this.momTails[i] = new Image();
        this.momTails[i].src = "./images/bigTail" + i + ".png";
    }

    for (var i = 0; i < 2; i++) {
        this.momEyes[i] = new Image();
        this.momEyes[i].src = "./images/bigEye" + i + ".png";
    }

    for (var i = 0; i < 8; i++) {
        this.momBodyOrange[i] = new Image();
        this.momBodyBlue[i] = new Image();
        this.momBodyOrange[i].src = "./images/bigSwim" + i + ".png";
        this.momBodyBlue[i].src = "./images/bigSwimBlue" + i + ".png";
    }
};

MomObj.prototype.draw = function() {

    // 鱼妈妈趋向鼠标位置 (运动速度)
    this.disX = lerpDistance(mX - 10, this.disX, 0.96);
    this.disY = lerpDistance(mY - 10, this.disY, 0.96);

    // 坐标差
    var deltaY = mY - this.disY;
    var deltaX = mX - this.disX;

    // 角度差
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;

    // 鱼妈妈朝向趋向鼠标 (转向速度)
    this.angle = lerpAngle(beta, this.angle, 0.6);

    this.momTailsTimer += deltaTime;
    if (this.momTailsTimer > 50) {
        this.momTailsCount = (this.momTailsCount + 1) % 8;
        this.momTailsTimer %= 50;
    }

    // 鱼妈妈眼睛
    this.momEyesTimer += deltaTime;
    if (this.momEyesTimer > this.momEyesInterval) {
        this.momEyesCount = (this.momEyesCount + 1) % 2;
        this.momEyesTimer %= this.momEyesInterval;

        // 鱼妈妈眨眼
        if (this.momEyesCount == 0) {
            this.momEyesInterval = Math.random() * 1500 + 2000; // [2000,3500)
        } else {
            this.momEyesInterval = 230;
        }
    }



    ctx1.save();
    ctx1.translate(this.disX, this.disY);

    // 旋转鱼妈妈
    ctx1.rotate(this.angle);

    if(data.double == 1) {
        ctx1.drawImage(this.momBodyOrange[this.momBodyCount], -this.momBodyOrange[this.momBodyCount].width * 0.5, -this.momBodyOrange[this.momBodyCount].height * 0.5);
    } else {
        ctx1.drawImage(this.momBodyBlue[this.momBodyCount], -this.momBodyBlue[this.momBodyCount].width * 0.5, -this.momBodyBlue[this.momBodyCount].height * 0.5);
    }

    ctx1.drawImage(this.momTails[this.momTailsCount], -this.momTails[this.momTailsCount].width * 0.5 + 30, -this.momTails[this.momTailsCount].height * 0.5);
    ctx1.drawImage(this.momEyes[this.momEyesCount], -this.momEyes[this.momEyesCount].width * 0.5, -this.momEyes[this.momEyesCount].height * 0.5);
    ctx1.restore();
};
