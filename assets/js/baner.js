// author - Isa(류윤종)

// main baner canvas

// canvas 2d set
const CANVAS = $('#main_baner');
const CTX = CANVAS.getContext('2d');
const CENTERX = CANVAS.width/2;
const CENTERY = CANVAS.height/2;

class PaintPath {
    static getReat(X, Y, width, height, color){
        CTX.beginPath();
        CTX.rect(X, Y, width, height);
        CTX.fillStyle = color;
        CTX.fill();
        CTX.closePath();
    }
    static getCircle(X, Y, radius, ball, color){
        CTX.beginPath();
        CTX.arc(X, Y, radius, ball, 0, Math.PI*2);
        CTX.fillStyle = color;
        CTX.fill();
        CTX.closePath();
    }
}


function drawBall(X, Y) {
    const RANDOMA = Math.ceil(Math.random()*100);
    const RANDOMB = Math.ceil(Math.random()*130);
    const RANDOMS = Math.ceil(Math.random()*8);
    const COLOR = ["#30A9DE", "#EFDC05", "#E53A40", "#090707", "#E71D36", "#2EC4B6", "#EFFFE9", "#011627"];
    let xx = X;
    let yy = Y;

    if(RANDOMS === 1){
        xx = xx + RANDOMB;
        yy = yy - RANDOMA;
    } else if(RANDOMS === 2) {
        xx = xx - RANDOMA;
        yy = yy + RANDOMB;
    } else if(RANDOMS === 3){
        xx = xx + RANDOMA;
        yy = yy - RANDOMB;
    } else if (RANDOMS === 4) {
        xx = xx - RANDOMB;
        yy = yy + RANDOMA;
    } else if (RANDOMS === 5) {
        xx = xx - RANDOMA - RANDOMB;
        yy = yy + RANDOMA - RANDOMB;
    } else if (RANDOMS === 6) {
        xx = xx + RANDOMB + RANDOMA;
        yy = yy - RANDOMB + RANDOMA;
    } else if (RANDOMS === 7) {
        xx = xx + RANDOMA + RANDOMB;
        yy = yy - RANDOMA + RANDOMB;
    } else if (RANDOMS === 8) {
        xx = xx - RANDOMB - RANDOMA;
        yy = yy + RANDOMB - RANDOMA;
    }

    PaintPath.getCircle(xx, yy, 4, 10, COLOR[RANDOMS-1]);
    
}

function draw() {

    setInterval(drawBall, 100, CENTERX, CENTERY);
    setInterval(drawBall, 100, CENTERX, CENTERY);
    setInterval(drawBall, 100, CENTERX, CENTERY);
    setInterval(drawBall, 100, CENTERX, CENTERY);
    setInterval(drawBall, 100, CENTERX, CENTERY);
    
}

draw();