function setup() {
  createCanvas(1000,1000);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  let leftX = 100;
  let leftY = 200;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 100, 100);
  rotate(leftAngle);
  fill(0);
  ellipse(20.5, 0, 50, 50);
  pop();

  // Draw right eye

  let rightX = 900;
  let rightY = 200;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 100, 100);
  rotate(rightAngle);
  fill(0);
  ellipse(20.5, 0, 50, 50);
  pop();
  fill(0);
  stroke(0,255,9);
  strokeWeight(3);
  if (mouseIsPressed === true) {
    stroke(255,102,255);
  }
  for (let d = 900; d > 0; d -= 15) {
  circle(500, 500, d);
}
  
}
