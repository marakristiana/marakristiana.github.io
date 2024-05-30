let x, y;
let jebkas;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 // background(255);
  
  stroke(0, 20)
  
  jebkas = random(900)
  x = random (400)
  y = 200
  stroke(0,20)
  circle(windowWidth, 0, jebkas);
  circle(0, 0, jebkas);
  circle(0, windowHeight, jebkas);
  circle(0, windowWidth, jebkas);
  circle(WindowHeight, windowWidth, jebkas)
   noFill();
  
  line (x, 0, y, jebkas)
   line (windowWidth/2, x, jebkas, y)
 
}