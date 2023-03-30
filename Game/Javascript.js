let KEY_SPACE = false;
let KEY_UP = false;
let KEY_DOWN = false;
let canvas;
let ctx;
let backgroundImage = new Image();


let rocket = {
    x: 50,
    y:200,
    width: 100,
    height: 50,
    src: 'rocket.png'
};

let ufos = [];

document.onkeydown = function(e) {
    if (e.keycode == 32) {
        KEY_SPACE = true;
    }
}

document.onkeydown = function(e) {
    if (e.keycode == 38) {
        KEY_UP = true;
    }

}

document.onkeydown = function(e) {
    if (e.keycode == 40) {
        KEY_DOWN = true;
    }
}

document.onkeyup = function(e) {
    if (e.keycode == 32) {
        KEY_SPACE = true;
    }
}

document.onkeydown = function(e) {
    if (e.keycode == 32) {
        KEY_SPACE = false;
    }
}

document.onkeydown = function(e) {
    if (e.keycode == 38) {
        KEY_UP = false;
    }

}

document.onkeydown = function(e) {
    if (e.keycode == 40) {
        KEY_DOWN = false;
    }
}

function startgame(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    loadImages();
    setInterval(update, 1000 / 25);
    setInterval(createUfos, 5000);
setInterval(checkForCollion, 1000 / 25 );
    draw();
    //calculate
}


function checkForCollion(){
    ufos.forEach(function(ufo){
if(rocket.x + rocket.width > ufo.x
     && rocket.y + rocket.height > ufo.y
     && rocket.x < ufo.x
     && rocket.y < ufo.y
     ) {
        rocket.img.src ='boom.png';
        console.log('Collion!!!!');
        ufos = ufos.filter(u => u != ufo);
     }
});
}

function createUfos() {
    let ufo= {
            x: 800,
            y:200,
            width: 100,
            height: 40,
            src: 'ufo.png'
            img: new Image()
        };
        ufo.img.src = ufo.src;
        ufos.push(ufo);
}


function update(){
if(KEY_UP) {
    rocket.y -= 4;
}


    if(KEY_DOWN) {
        rocket.y += 4;
    }

ufos.forEach(function(ufo)){
    ufo.x -= 5;
}

}

function loadImages (){
backgroundImage.src = 'background.png';
rocket.img = new Image();
rocket.img.src = rocket.src;
}


function draw(){
    ctx.drawImage(backgroundImage, 0, 0);
    ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);

    ufos.forEach(function(ufo) {
        ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
    });



    requestAnimationFrame(draw);
}