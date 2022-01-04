var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");



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
