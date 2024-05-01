// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 20; // Decide the initial number of particles.

let particles = [];

let t1 = 0.001; // attack time in seconds
let l1 = 0.5; // attack level 0.0 to 1.0
let t2 = 0.8; // decay time in seconds
let l2 = 0.01; // decay level  0.0 to 1.0

function setup() {
  let canvas = createCanvas(500, 900);
  canvas.parent("canvasWrapper");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(63, 55, 201);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.checkBounds();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.circleX = random(0, width);
    this.circleY = random(500, height);
    this.circleSize = random(10, 50);
    this.circleSpeed = map(this.circleSize, 10, 50, 5, 1);

    this.env = new p5.Envelope(t1, l1, t2, l2);
    this.triOsc = new p5.Oscillator('sine');
  }
  
  // methods (functions): particle's behaviors
  update() {
    // (add)
    this.circleY -= this.circleSpeed;
  }
  
  display() {
    // particle's appearance
    noStroke();
    push();
    fill(255, 60)
    // translate(this.x, this.y);
    this.circleDraw();
    pop();
  }
  
  checkBounds() {
    if (this.circleY < 0 || this.circleY > height) {
      this.circleY = random(500, height)
      this.playSound()
    }
  }
  
  circleDraw() {
    circle(this.circleX, this.circleY, this.circleSize);
  }

  playSound() {
    this.triOsc.freq(200); // Fixed frequency value
    this.triOsc.start();
    this.env.play(this.triOsc);
  }

}
