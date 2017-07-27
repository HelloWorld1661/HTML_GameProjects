var can1, can2, ctx1, ctx2, lastTime, deltaTime, bgImg = new Image(),
    cW, cH, ane, fruit, mom, mX, mY, baby, data, wave, halo, dust, clientH, clientW;

clientH = document.documentElement.clientHeight || document.body.clientHeight;
clientW = document.documentElement.clientWidth || document.body.clientWidth;

// 判断手机横竖屏状态：
function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        document.body.style.transform = 'rotate(90deg)';
    }
    if (window.orientation == 90 || window.orientation == -90) {
        document.body.style.transform = 'rotate(0)';
    }
}

// ready(function(){
//     game();
// });

window.onload = game;

function game() {
    init();

    lastTime = Date.now();


    deltaTime = 0;

    gameLoop();
}

function init() {

    bgImg.src = './images/background.jpg';

    // 找到画布并获得画笔

    can1 = document.getElementById('canvas1'); // fishes,dust,UI,circle
    ctx1 = can1.getContext('2d');

    can2 = document.getElementById('canvas2'); // background,ane,fruits
    ctx2 = can2.getContext('2d');

    can1.height = can2.height = clientH;
    can1.width = can2.width = clientW;

    can1.addEventListener('mousemove', onMousemove, false);
    can1.addEventListener('touchmove', onTouchmove, false);
    can1.addEventListener('click', restartGame, false);
    can1.addEventListener('touchend', onTouchend, false);

    ctx1.fillStyle = '#fff';
    ctx1.font = "20px Verdana"

    ctx1.textAlign = "center";

    cW = can1.width;
    cH = can1.height;

    ane = new AneObj();
    ane.init();

    fruit = new FruitObj();
    fruit.init();

    mom = new MomObj();
    mom.init();

    mX = cW * 0.5;
    mY = cH * 0.5;

    baby = new BabyObj();
    baby.init();

    data = new DataObj();

    wave = new WaveObj();
    wave.init();

    halo = new HaloObj();
    halo.init();

    dust = new DustObj();
    dust.init();

}

function gameLoop() {

    // fram per second => FPS
    requestAnimFrame(gameLoop);

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    if (deltaTime > 50) deltaTime = 50;

    // 绘制背景
    drawBackground();

    // 绘制海葵
    ane.draw();

    // 检测已出生的果实
    fruitMonitor();

    // 绘制果实
    fruit.draw();

    ctx1.clearRect(0, 0, cW, cH);

    // 绘制fps
    ctx1.save();
    ctx1.font = "10px Verdana"
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "#fff";
    ctx1.textAlign = "right";
    ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
    ctx1.fillText("fps " + deltaTime, cW - 6, 16);
    ctx1.restore();

    // 鱼宝宝状态提醒
    if (baby.babyBodyCount > 14) {
        var alpha = 1 / 25;
        var lineW = 25;
        ctx1.save();
        ctx1.lineWidth = 1;
        for (var i = lineW; i > 0; i--) {
            ctx1.strokeStyle = "rgba(255,0,0," + alpha + ")";
            ctx1.strokeRect(i, i, cW - i * 2, cH - i * 2);
            alpha += 1 / lineW;
        }
        ctx1.restore();
    }

    // 绘制鱼妈妈
    mom.draw();

    // 鱼妈妈与果实碰撞检测
    momFruitsCollision();

    // 鱼妈妈与鱼宝宝碰撞检测
    momBabyCollision();

    // 绘制鱼宝宝
    baby.draw();

    // 游戏数据
    data.draw();

    // 绘制鱼妈妈碰撞果实涟漪
    wave.draw();

    // 绘制鱼妈妈碰撞鱼宝宝涟漪
    halo.draw();

    // 绘制漂浮物
    dust.draw();

}

function onMousemove(e) {
    if (data.gameOver) return;
    var e = e || event;

    mX = e.offSetX || e.layerX;
    mY = e.offSetY || e.layerY;

}

function onTouchmove(e) {
    if (data.gameOver) return;
    var e = e || event;
    e.preventDefault();
    if (e.targetTouches.length == 1) {
        var touch = event.targetTouches[0];
        mX = touch.pageX;
        mY = touch.pageY;
    }
}

function restartGame() {
    if (!data.gameOver) return;
    data.gameOver = false;
    baby.babyBodyCount = 0;
    mom.momBodyCount = 0;
    data.fruitNum = 0;
    data.score = 0;
}

function onTouchend(e) {
    if (!data.gameOver) return;
    var e = e || event;
    e.preventDefault();
    data.gameOver = false;
    baby.babyBodyCount = 0;
    mom.momBodyCount = 0;
    data.fruitNum = 0;
    data.score = 0;
}
