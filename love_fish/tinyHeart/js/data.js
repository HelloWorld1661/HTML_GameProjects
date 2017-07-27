var DataObj = function() {
    // 吃掉的果实数量
    this.fruitNum = 0;

    // 倍率
    this.double = 1;

    // 总分
    this.score = 0;

    this.gameOver = false;

    this.alpha = 0;
};

DataObj.prototype.reset = function() {
    this.fruitNum = 0;
    this.double = 1;
};

DataObj.prototype.draw = function() {
    if (data.gameOver) {
        this.alpha += deltaTime * 0.001;
        if (this.alpha > 1) this.alpha = 1;
        ctx1.save();
        ctx1.font = "30px Verdana"
        ctx1.shadowBlur = 10;
        ctx1.shadowColor = "#fff";
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx1.fillText("GAME OVER", cW * 0.5, cH * 0.5);
        ctx1.restore();
    }
    // ctx1.fillText("分数 : " + this.fruitNum, cW * 0.5, cH - 50);
    // ctx1.fillText("倍率 : x" + this.double, cW * 0.5, cH - 80);
    ctx1.fillText("score : " + this.score, cW * 0.5, cH - 20);
};

DataObj.prototype.addScore = function() {
    this.score += this.fruitNum * 1 * this.double;
    this.fruitNum = 0;
    this.double = 1;
};
