var DustObj = function () {
    this.dustPics = [];
    this.aDisX = [];
    this.aDisY = [];
    this.amp = []; // 振幅
    this.No = [];
    this.alpha = [];
};

DustObj.prototype.num = Math.floor(clientW / 27);

DustObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.aDisX[i] = Math.random() * cW;
        this.aDisY[i] = Math.random() * cH;
        this.amp[i] = 20 + Math.random() * 25;
        this.No[i] = Math.floor(Math.random() * 7);// [[0~7)~6]
    }
    this.alpha = 0;
    for (var i = 0; i < 7; i++) {
        this.dustPics[i] = new Image();
        this.dustPics[i].src = "./images/dust" + i + ".png";
    }
};

DustObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0008; // 和海葵的参数一致
    var l = Math.sin(this.alpha);
    for (var i = 0; i < this.num; i++) {
        var no = this.No[i];
        ctx1.drawImage(this.dustPics[no], this.aDisX[i] + this.amp[i] * l, this.aDisY[i]);
    }
};