//Entradas
var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
var moveEsquerda = false, moveDireita = false, moveCima = false, moveBaixo = false;
var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

var p1 = {
    x: 10,
    y: 10
};


update();

window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyupHandler, false);

function keydownHandler(e){
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT){
        moveEsquerda = true;
    }
    if(key === RIGHT && key !== LEFT){
        moveDireita = true;
    }
    if(key === UP && key !== DOWN){
        moveCima = true;
    }
    if(key === DOWN && key !== UP){
        moveBaixo = true;
    }
}

function keyupHandler(e){
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT){
        moveEsquerda = false;
    }
    if(key === RIGHT && key !== LEFT){
        moveDireita = false;
    }
    if(key === UP && key !== DOWN){
        moveCima = false;
    }
    if(key === DOWN && key !== UP){
        moveBaixo = false;
    }
}

function move(){
    if(moveEsquerda){
        p1.x--;
    }
    if(moveDireita){
        p1.x++;
    }
    if(moveCima){
        p1.y--;
    }
    if(moveBaixo){
        p1.y++;
    }
}




function render(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillRect(p1.x, p1.y, 50, 80);
}

function update(){
    requestAnimationFrame(update, cnv);
    move();
    render();
}

