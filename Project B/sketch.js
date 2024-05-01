
let inputName, inputID, button, greeting;
let namecheck = 'Thomas Bhing';
let id = '7621903';
let posX, posY;

function setup() {
  // create canvas
  let canvas = createCanvas(400, 300);
  canvas.parent("p5-container");
  background(30,0);
  fill(30);
  rect(0,0,width, height, 20,20,20,20);

  posX = width * 1 / 4.5 + 20;
  posY = height * 1 / 3 + 30;

  textAlign(CENTER);
  textSize(30);
  

  inputName = createInput();
  inputName.parent("p5-container");
  inputName.position(posX + 10, posY);

  inputID = createInput();
  inputID.parent("p5-container");
  inputID.position(posX+ 10, posY +  50);

  button = createButton('submit');
  button.parent("p5-container");
  button.position(inputName.x + inputName.width + 10, posY + 50);
  button.mousePressed(greet);

  push();
  fill(255);
  strokeWeight(0.6);
  stroke(255);
  text('Identity Verification', width / 2, height / 4);
  pop();

  push();
  stroke(255);
  strokeWeight(0.6);
  fill(255);
  textSize(15);
  text('Name', posX - width / 12, posY + 15);
  text('ID', posX - width / 18, posY + 65);
  pop();
}


function greet() {
  const name = inputName.value();
  const numb = inputID.value();
  if (inputName.value() == namecheck || inputName.value() == 'Marcela' || inputName.value() == 'Ricci Liu') {

    if (inputName.value() == namecheck) {
      if (inputID.value() == id) {
        background(30,0);
        fill(30);
        rect(0,0,width, height, 20,20,20,20);
        
        push();
        fill(255);
        strokeWeight(0.6);
        stroke(255);
        text('Hello Thomas Bhing', width / 2, height / 4);
        pop();
        
        push();
        fill(255);
        textSize(20);
        text(name, width / 2, height / 1.5 + 30);
        textSize(10);
        text('Biological supervision department', width / 2, height / 2 + 105);
        text('Senior Detective', width / 2, height / 1.5 + 65);
        pop();

        setTimeout(function() {
            window.location.href = "info/info.html";
        }, 3000);

      } else {
        background(30,0);
        fill(30);
        rect(0,0,width, height, 20,20,20,20);
        
        push();
        fill(255);
        strokeWeight(0.6);
        stroke(255);
        text('Please Enter the ID', width / 2, height / 4);
        pop();
      }
    }

    if (inputName.value() == 'Marcela') {
      background(30,0);
      fill(30);
      rect(0,0,width, height, 20,20,20,20);
      
      push();
      fill(255);
      strokeWeight(0.6);
      stroke(255);
      text('Hello Marcela', width / 2, height / 4);
      pop();
      
      push();
      fill(255);
      textSize(20);
      text(name, width / 2, height / 1.5 + 30);
      textSize(10);
      text('Lab 3', width / 2, height / 2 + 105);
      text('Top Management', width / 2, height / 1.5 + 65);
      pop();
    }

    if (inputName.value() == 'Ricci Liu') {
      background(30,0);
      fill(30);
      rect(0,0,width, height, 20,20,20,20);
      
      push();
      fill(255);
      strokeWeight(0.6);
      stroke(255);
      text('Hello Ricci Liu', width / 2, height / 4);
      pop();
      
      push();
      fill(255);
      textSize(25);
      text(name, width / 2, height / 1.5 + 30);
      textSize(15);
      text('Public Relations Department', width / 2, height / 2 + 105);
      text('Top Management', width / 2, height / 1.5 + 75);
      pop();
    }

  } else {
    background(30,0);
    fill(30);
    rect(0,0,width, height, 20,20,20,20);
    
    push();
    fill(255);
    strokeWeight(0.6);
    stroke(255);
    text('Invalid Identity', width / 2, height / 4);
    pop();
    
  }
  inputName.value('');
  inputID.value('');

  push();
  stroke(255);
  strokeWeight(0.6);
  fill(255);
  textSize(15);
  text('Name', posX - width / 12, posY + 15);
  text('ID', posX - width / 18, posY + 65);
  pop();

}
