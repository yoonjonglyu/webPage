// author - Isa(류윤종)

// main baner canvas

// canvas 2d set
let canvas = $('#main_baner');
const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let ctx = canvas.getContext('2d');
const CENTERX = canvas.width/2;
const CENTERY = canvas.height/2;


class PaintPath {
    static getReat(X, Y, width, height, color){
        ctx.beginPath();
        ctx.rect(X, Y, width, height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    static getCircle(X, Y, radius, ball, color){
        ctx.beginPath();
        ctx.arc(X, Y, radius, ball, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    static getText(fontSize, font, color, text, X, Y){
        ctx.font = fontSize+" "+font;
        ctx.fillStyle = color;
        ctx.fillText(text,X,Y);
    }
}


function drawBall(X, Y) {
    const RANDOMA = Math.ceil(Math.random()*180);
    const RANDOMB = Math.ceil(Math.random()*180);
    const RANDOMS = Math.ceil(Math.random()*8);
    const RANDOMP = Math.ceil(Math.random()*5);
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

    PaintPath.getCircle(xx, yy, 4+RANDOMP, Math.PI*2, COLOR[RANDOMS-1]);
    
}

function drawStepOne() {
    const BALL1 = setInterval(drawBall, 50, CENTERX, CENTERY);
    const BALL2 = setInterval(drawBall, 50, CENTERX, CENTERY);
    const BALL3 = setInterval(drawBall, 50, CENTERX, CENTERY);
    const BALL4 = setInterval(drawBall, 50, CENTERX, CENTERY);

    return [BALL1, BALL2, BALL3, BALL4];
}

function drawStepTwo(state) {
    clearInterval(state[0]);
    clearInterval(state[1]);
    clearInterval(state[2]);
    clearInterval(state[3]);
    PaintPath.getReat(24, 24, canvas.width-48, canvas.height-48, "#c9d6df");
    PaintPath.getText("1rem", "나눔 고딕", "#ff5722", "안녕하세요. 개발자ISA입니다.",  CENTERX - 100, CENTERY);
}

function draw() {
    canvas = $('#main_baner');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext('2d');
    let state = drawStepOne();

    setTimeout(drawStepTwo, 4000, state);
    
}