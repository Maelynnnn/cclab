// let glitch;
// let startTime;

// function setup() {
//     loadImage('highre.png', function(im){
//         let canvas = createCanvas(im.width, im.height);
//         canvas.parent("p5-container"); 
//         background(0);
//         imageMode(CENTER);

//         glitch = new Glitch();
//         glitch.loadImage(im);

//         startTime = millis() + 5000;
//     });
// }

// function draw() {
//     if (millis() >= startTime) {
//         glitch.resetBytes();
//         glitch.replaceBytes(150, 104);
//         glitch.randomBytes(1);
//         glitch.buildImage();
//     }

//     image(glitch.image, width/2, height/2);
// }

let glitch;
let startTime;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5-container")
	background(0);
	imageMode(CENTER);

	glitch = new Glitch(); 
	loadImage("warn.png", function(im){
		glitch.loadImage(im);
		startTime = millis() + 5000;
	});
}

function draw() {
	if(millis() >= startTime){
		glitch.resetBytes();

	glitch.replaceBytes(100, 104); // swap all decimal byte 100 for 104
	glitch.randomBytes(1); // add one random byte for movement

	
	}
	glitch.buildImage();
	image(glitch.image, width/2, height/2, width / 2, height/ 3)
}