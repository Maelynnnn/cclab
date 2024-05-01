let glitch;
let startTime;

function setup() {
    loadImage('highre.png', function(im){
        let popupContent = document.getElementById("pup"); 
        let canvas = createCanvas(im.width, im.height);
        canvas.parent("popupContent"); 
        background(0);
        imageMode(CENTER);

        glitch = new Glitch();
        glitch.loadImage(im);

        startTime = millis() + 5000;
    });
}

function draw() {
    if (millis() >= startTime) {
        glitch.resetBytes();
        glitch.replaceBytes(100, 104);
        glitch.randomBytes(1);
        glitch.buildImage();
    }

    image(glitch.image, width/2, height/2);
}