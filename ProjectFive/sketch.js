var diameter = 50;
var beginning = 150;
var space = 100;

function setup() {
  createCanvas (500, 500);
}

function draw() {
  background (0, 41, 122);
  ellipse(150, 250, diameter, diameter);
  ellipse(250, 250, diameter, diameter);
  ellipse(350, 250, diameter, diameter);

  if (mouseIsPressed) {
background (0, 0, 0);
      diameter = 100
      fill(random(255), random(200, 255), random(255));
    } else {
      diameter = 50;
    fill(255);
  }

  ellipse(beginning + (space * 0), 250, diameter, diameter);
  ellipse(beginning + (space * 1), 250, diameter, diameter);
  ellipse(beginning + (space * 2), 250, diameter, diameter);
}
