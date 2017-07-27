var WaveObj = function () {
    this.aDisX = [];
    this.aDisY = [];
    this.flag = [];
    this.r = [];
};

WaveObj.prototype.num = 10;

WaveObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.aDisX[i] = 0;
        this.aDisY[i] = 0;
        // 涟漪状态
        this.flag[i] = false;
        this.r[i] = 0;
    }
};

WaveObj.prototype.draw = function () {
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 2;
    ctx1.shadowColor = "#fff";
    for (var i = 0; i < this.num; i++) {
        if (this.flag[i]) {
            // 涟漪半径
            this.r[i] += deltaTime * 0.04;

            // 结束这个涟漪
            if (this.r[i] > 50) {
                this.flag[i] = false;
                break;
            }

            // 涟漪透明度
            var alpha = 1 - this.r[i] / 50;

            // 绘制涟漪
            ctx1.beginPath();
            ctx1.arc(this.aDisX[i], this.aDisY[i], this.r[i], 0, Math.PI * 2);
            ctx1.strokeStyle = "rgba(255,255,255," + alpha + ")";
            ctx1.closePath();
            ctx1.stroke();
        }
    }
    ctx1.restore();
};

WaveObj.prototype.born = function (x, y) {
    for (var i = 0; i < this.num; i++) {
        if (!this.flag[i]) {
            this.flag[i] = true;
            this.r[i] = 10;
            this.aDisX[i] = x;
            this.aDisY[i] = y;
            return;
        }
    }
};
