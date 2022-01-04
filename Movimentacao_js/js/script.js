
var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

var p1 = {
    x: 10,
    y: 10
};

window.addEventListener("keydown", keydownHandler);

function keydownHandler(e){
    alert(e.keyCode);
}

render();

function render(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillRect(p1.x, p1.y, 50, 80);
}

