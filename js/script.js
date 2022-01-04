var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(e){
    alert(e.keyCode);
}

function update(){
    
}

function draw(){
    ctx.fillRect(50, 50, 50, 50);
}


function loop(){
    window.requestAnimationFrame(loop, cnv);
    update();
    draw();
}

loop();
