
var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");
var sercX = 0;
var sercY = 0;
var size = 400;
var map = new Image();
map.src = "img/map.png";
map.onload = render();


function render(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(map, 0, 0, 400, 400, 0, 0, cnv.width, cnv.height);
}

function update(){

}

function looping(){

}