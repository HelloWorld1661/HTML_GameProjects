var AneObj = function () {
    this.rootX = [];
    this.headX = [];
    this.headY = [];
    this.alpha = 0;//角度
    this.amp = [];//振幅
};

AneObj.prototype.num = Math.floor(clientW / 16);

AneObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        // 海葵数量
        this.rootX[i] = i * 16 + Math.random() * 20;

        this.headX[i] = this.rootX[i];

        // 海葵高度
        this.headY[i] = cH - 230 + Math.random() * 50;

        this.amp[i] = Math.random() * 50 + 50;

    }
};

AneObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = 'round';
    ctx2.strokeStyle = '#3b154e';
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.rootX[i], cH);
        this.headX[i] = this.rootX[i] + l * this.amp[i];
        ctx2.quadraticCurveTo(this.rootX[i], cH - 100, this.headX[i], this.headY[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};
