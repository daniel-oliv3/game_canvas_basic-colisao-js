
//Entradas
var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
var SIZE = 50;
var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");
var posX = 50;
var posY = 50;
var objColor = "#00f";

var mvLeft = mvUp = mvRight = mvDown = false;

function updateBlock(){
    if(mvLeft){
        posX--;
    }
    if(mvRight){
        posX++;
    }
    if(mvUp){
        posY--;
    }
    if(mvDown){
        posY++;
    }
}

window.addEventListener("keydown", keydownHandler, false);
window.addEventListener("keyup", keyupHandler, false);

function keyupHandler(e){
    var key = e.keyCode;
    switch(key){
        case UP:
            mvUp = false;
            break;
        case DOWN:
            mvDown = false;
            break;
        case LEFT:
            mvLeft = false;
            break;
        case RIGHT:
            mvRight = false;
            break;            
    }
}

function keydownHandler(e){
    var key = e.keyCode;
    switch(key){
        case UP:
            mvUp = true;
            break;
        case DOWN:
            mvDown = true;
            break;
        case LEFT:
            mvLeft = true;
            break;
        case RIGHT:
            mvRight = true;
            break;            
    }
}

function update(){
    updateBlock();
}

function draw(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = objColor;
    ctx.fillRect(posX, posY, SIZE, SIZE);
}


function loop(){
    window.requestAnimationFrame(loop, cnv);
    update();
    draw();
}

loop();
