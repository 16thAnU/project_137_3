img = "";

function preload() {
    img = loadImage("bottle.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    img(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("bottle",45,75);
    noFill();
    stroke("#FF0000");
    rect();
    fill("#FF0000");
}