let x, y;
let jebkas;


function setup() {
  createCanvas(600, 400);
}

function draw() {
 // background(255);
  
  stroke(0, 20)
  
  jebkas = random(900)
  x = random (400)
  y = 200
  stroke(0,20)
  circle(600, 0, jebkas);
  circle(0, 0, jebkas);
  circle(0, 600, jebkas);
  circle(0, 400, jebkas);
  circle(600, 400, jebkas)
   noFill();
  
  line (x, 0, y, jebkas)
   line (300, x, jebkas, y)
 
}