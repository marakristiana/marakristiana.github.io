let x;
let y = 200;
let r;
function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(0, 20);
    noFill();
    background(255);
}

function draw() {
    // pick a random number for the radius
    r = random(width);

    // draw circle top-right
    circle(width, 0, r);
    // draw circle top-left
    circle(0, 0, r);
    // draw circle bottom-left
    circle(0, height, r);
    // draw circle bottom-right
    circle(width, height, r);
    // draw circle in center of canvas
    circle(mousex, mousey, r);

    strokeWeight(random(0.1, 1));

    // pick a random number
    let x1 = width / 3;
    let y1 = 0;
    let x2 = random(width);
    let y2 = height;

    line(x1, y1, x2, y2);

    x1 = width * 0.666;
    y1 = height;
    x2 = random(width);
    y2 = height * 0.666;

    line(x1, y1, x2, y2);
}

function keyPressed() {
    if (key === "c") {
        background(255);
    } else {
        saveCanvas("drawing", "jpg");
    }
}