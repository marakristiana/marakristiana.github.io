let lineLengths = [20, 40, 60, 80, 100, 120];
let diceValue = 1; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  drawInstructions();
}

function drawInstructions() {
  background(255);
  text("Click to roll the dice and draw a line!", width / 2, height / 2 - 50);
}

function draw() {

}

function mousePressed() {
  diceValue = int(random(1, 7));
  
  let startX = random(width);
  let startY = random(height);
  
  drawLine(startX, startY, diceValue);
  
  fill(255);
  noStroke();
  rect(width / 2 - 100, height / 2 - 20, 200, 40);
  fill(0);
  text("Dice: " + diceValue, width / 2, height / 2);
}

function drawLine(x, y, dice) {
  let length = lineLengths[dice - 1];
  let endX = x;
  let endY = y;

  if (dice == 1) { // Up
    endY -= length;
  } else if (dice == 2) { // Down
    endY += length;
  } else if (dice == 3) { // Left
    endX -= length;
  } else if (dice == 4) { // Right
    endX += length;
  } else if (dice == 5) { // Diagonal up-right
    endX += length;
    endY -= length;
  } else if (dice == 6) { // Diagonal up-left
    endX -= length;
    endY -= length;
  }

  stroke(0); 
  line(x, y, endX, endY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawInstructions();
}
