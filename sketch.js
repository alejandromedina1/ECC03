let app;

function setup() {
  createCanvas(1400, 900);
  app = new App(this);
}

function draw() {
  background(220);
  app.application();
}

function mousePressed() {
  app.interaction();
}

function keyPressed(){
  app.openMenu();
}