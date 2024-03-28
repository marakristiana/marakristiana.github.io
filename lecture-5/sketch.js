let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage("./002538060023.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    image(img, 0, 0, width, height );
    if(mouseX < width/2
    &&
    mouseY < height /2
    )
    {
        circle(mouseX, mouseY, 50);
    } 
    if(mouseX > width/2
    &&
    mouseY > height /2
    )
    {
        square(mouseX, mouseY, 50);
    } 
   
}