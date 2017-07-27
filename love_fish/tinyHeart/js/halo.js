var HaloObj = function () {
    this.aDisX = [];
    this.aDisY = [];
    this.flag = [];
    this.r = [];
};

HaloObj.prototype.num = 5;

HaloObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.aDisX[i] = 0;
        this.aDisY[i] = 0;
        this.flag[i] = false;
        this.r[i] = 0;
    }
};

HaloObj.prototype.draw = function () {

    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 1;
    ctx1.shadowColor = "#fff";
    for (var i = 0; i < this.num; i++) {
        if (this.flag[i]) {
            // 涟漪半径
            this.r[i] += deltaTime * 0.04;

            // 结束这个涟漪
            if (this.r[i] > 100) {
                this.flag[i] = false;
                break;
            }

            // 涟漪透明度
            var alpha = 1 - this.r[i] / 100;

            // 绘制涟漪
            ctx1.beginPath();
            ctx1.arc(this.aDisX[i], this.aDisY[i], this.r[i], 0, Math.PI * 2);
            ctx1.strokeStyle = "rgba(203,91,0," + alpha + ")";
            ctx1.closePath();
            ctx1.stroke();
        }
    }
    ctx1.restore();
};

HaloObj.prototype.born = function (x, y) {
    for (var i = 0; i < this.num; i++) {
        if (!this.flag[i]) {
            this.aDisX[i] = x;
            this.aDisY[i] = y;
            this.r[i] = 10;
            this.flag[i] = true;
            return;
        }
    }
};