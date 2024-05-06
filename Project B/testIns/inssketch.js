let vid;
let cam;

function preload(){
  vid = createVideo('BWglitch.mp4')
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-container")
  // Mycamera();
  vid.loop();
  vid.hide();
}

function draw() {
  image(vid, 0, 0, windowWidth, windowHeight);
  textFont("Jersey 25");
  word(windowWidth / 2, windowHeight / 4 );
}

function word(x, y){
  fill(255);
  textSize(windowWidth / 20);
  textAlign(CENTER);
  let insx = random(x -1.5,x  + 1.5)
  let insy = random(y - 1, y + 1)
  text('Pre-test instructions',insx, insy);

  textSize(windowWidth / 35);
  text('This test will assess you based on your choices. ',insx, insy + 60);
    text('You will be asked to follow the rules below:',insx, insy + 105);
  
  textSize(windowWidth / 40);
  text('1. leave all the door in sight wide open',insx, insy + 180);
  text('2. make sure you are alone',insx, insy + 220);
  text('3. turn off all lights',insx, insy + 260);
  text('4. take each question seriously',insx, insy + 300);
  text('5. make your face visible',insx, insy + 340);
  
  textSize(windowWidth / 30);
  text('Click to continue',insx, insy + 430);
  
}

function Mycamera(){
  cam = createCapture(VIDEO);
  cam.hide();
  cam.loadPixels();
  cam.updatePixels();
}