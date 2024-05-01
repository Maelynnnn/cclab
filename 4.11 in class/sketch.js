let img;
let x = 0;
let cam;
let n = 10;

function preload(){
  img = loadImage("assets/hokusai.jpg");
}

function setup() {
  let canvas = createCanvas(600, 404);
  canvas.parent("p5-canvas-container");
  cam = createCapture(VIDEO);
  cam.hide();
  background(255);
}

function draw() {
  //
   cam.loadPixels();
  image(cam, 0, 0);
  noStroke();
  for (let x = 0; x < cam.width; x += n){
    for(let y = 0; y < cam.height; y += n){
      let index = (x + y * cam.width) * 4;
      let r = cam.pixels[index + 0]
      let g = cam.pixels[index + 1]
      let b = cam.pixels[index + 2]
      fill(r,g,b)
      rect(x, y, 20, 20);
    }
    
  }

  //image(img,x, 0);
  // noStroke();
  // for(let i = 0; i < width; i += 10){
  //   for(let j = 0; j < height; j += 10){
  //     let c = img.get(i, j);
  //     fill(c);
  //     circle(i, j, 50);
  //   }
  // }
  // let x = random(width);
  // let y = random(height);
  // let c = img.get(x, y);
  // fill(c);
  // for(let i = 0; i < 10; i += 1){
  //   circle(x, y, random(10,20));
  // }




  // cam.loadPixels();
  // image(cam, 0, 0,1);

  // let x = random(width);
  // let y = random(height);
  // let c = cam.get(x,y);
  // fill(c);
  // for(let i = 0; i < 200; i += 100){
  //   circle(x, y, 10);
  // }

  //   for(let i = 0; i < width; i += 20){
  //     for(let j = 0; j < height; j += 20){
  //       let c = cam.get(i, j);
  //       fill(c);
  //       circle(i, j, 20);
  //   }
  // }
}