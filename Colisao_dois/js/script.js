(function(){
    //Variaveis
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");

    //Teclas
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

    //Movimentos
    var mvLeft = mvUp = mvRight = mvDown = false;


    //Arrays
    var sprites = [];
    var blocks = [];

    //Objstos Personagem
    var character = new Sprite(50, 175, 50, 50, "#00f");
    sprites.push(character);

    //Funções
    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }


    function update(){
        
    }


    function render(){
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        for(var i in sprites){
            var spr = sprites[i];
            if(spr.visible){
                ctx.fillStyle = spr.color;
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
            }
        }
    }

    loop();


















}());