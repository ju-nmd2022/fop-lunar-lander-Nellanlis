push();
let particles = [];

//stars in the sky
background(0, 0, 0);

function createParticle() {
  const x = Math.random() * width;
  const y = Math.random() * (height - 140);
  return { x: x, y: y };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 255, 255, 3);
  ellipse(0, 0, 1.5);
  pop();
}

function updateParticle(particle) {
  particle.x = particle.x;
  particle.y = particle.y;
}

for (let i = 100; i < 500; i++) {
  const particle = createParticle();
  particles.push(particle);
}

function draw() {
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }
}
pop();

// the moon
fill(145, 145, 145, 100);
rect(0, 450, width, 120);

// the spaceship
let x = 300;
let y = 300;
let s = 0.5;
noStroke();

function satellite() {
  push();
  translate(x - 300, y - 260);
  rotate(-0.09999);
  //satellite body
  fill(255, 255, 255);
  stroke(255, 255, 255);
  beginShape();
  vertex(x + 150, y - 150);
  bezierVertex(x + 150, y - 160, x + 170, y - 160, x + 170, y - 150);
  vertex(x + 170, y - 130);
  bezierVertex(x + 170, y - 120, x + 150, y - 120, x + 150, y - 130);
  endShape(CLOSE);
  //top orange bit
  fill(255, 95, 0);
  noStroke();
  ellipse(x + 160, y - 153, 20, 10);
  fill(255, 150, 0);
  ellipse(x + 160, y - 153, 13, 6);
  //ball on top
  fill(0, 191, 255);
  ellipse(x + 160, y - 161, 16);
  ellipse(x + 160, y - 143, 6);
  fill(255, 255, 0);
  ellipse(x + 160, y - 135, 3);
  //wings of satellite
  fill(50, 205, 50);
  rect(x + 120, y - 150, 25, 20);
  rect(x + 175, y - 150, 25, 20);
  fill(255, 255, 0);
  rect(x + 124, y - 147, 6, 6);
  rect(x + 124, y - 139, 6, 6);
  rect(x + 132, y - 147, 6, 6);
  rect(x + 132, y - 139, 6, 6);
  rect(x + 179, y - 147, 6, 6);
  rect(x + 179, y - 139, 6, 6);
  rect(x + 187, y - 147, 6, 6);
  rect(x + 187, y - 139, 6, 6);
  pop();
}
function planets() {
  noStroke();
  fill(255, 255, 255, 30);
  ellipse(x + 45, y - 200, 25);
  ellipse(x - 150, y - 100, 20);
  fill(255, 255, 255, 70);
  ellipse(x + 140, y - 50, 10);
  ellipse(x - 190, y - 140, 30);
  ellipse(x + 250, y - 240, 30);
}

function meteor() {
  //meteor
  push();
  fill(255, 255, 255, 200);
  ellipse(x - 250, y - 199, 15);
  pop();
  beginShape();
  vertex(x - 250, y - 205);
  vertex(x - 290, y - 210);
  vertex(x - 253, y - 195);
  endShape();
}

function fire() {
  //darkest part of fire
  fill(30, 144, 255);
  noStroke();
  beginShape();
  vertex(x - 25 * s, y + 75 * s);
  bezierVertex(
    x - 25 * s,
    y + 95 * s,
    x - 15 * s,
    y + 105 * s,
    x + s,
    y + 120 * s
  );
  bezierVertex(
    x + 20 * s,
    y + 105 * s,
    x + 25 * s,
    y + 95 * s,
    x + 25 * s,
    y + 75 * s
  );
  endShape();

  //middle part of fire
  fill(0, 191, 255);
  beginShape();
  vertex(x - 20 * s, y + 75 * s);
  bezierVertex(
    x - 20 * s,
    y + 90 * s,
    x - 10 * s,
    y + 100 * s,
    x + s,
    y + 110 * s
  );
  bezierVertex(
    x + 15 * s,
    y + 100 * s,
    x + 20 * s,
    y + 90 * s,
    x + 20 * s,
    y + 75 * s
  );
  endShape();

  //lightest part of fire
  noStroke();
  fill(0, 255, 255);
  beginShape();
  vertex(x - 10 * s, y + 70 * s);
  bezierVertex(
    x - 14 * s,
    y + 86 * s,
    x - 15 * s,
    y + 88 * s,
    x + s,
    y + 100 * s
  );
  bezierVertex(
    x + 14 * s,
    y + 86 * s,
    x + 15 * s,
    y + 88 * s,
    x + 10 * s,
    y + 77 * s
  );
  endShape();
}

function spaceship() {
  //yellow spacers
  push();
  translate(x - 80 * s, y + 40 * s);
  rotate(2.5);
  fill(255, 255, 0);
  rect(-30 * s, -20 * s, 50 * s, 30 * s);
  pop();

  push();
  translate(x + 60 * s, y + 20 * s);
  rotate(0.7);
  fill(255, 255, 0);
  rect(0 * s, -9 * s, 50 * s, 30 * s);
  pop();

  //yellow by fire
  fill(255, 255, 0);
  beginShape();
  vertex(x + 30 * s, x + 60 * s);
  vertex(x - 30 * s, y + 60 * s);
  vertex(x - 35 * s, y + 80 * s);
  bezierVertex(
    x - 10 * s,
    y + 75 * s,
    x + 10 * s,
    y + 75 * s,
    x + 35 * s,
    y + 80 * s
  );
  endShape();

  //body
  fill(255, 16, 240);
  ellipse(x, y, 150 * s);

  // feet
  beginShape();
  vertex(x - 120 * s, y + 90 * s);
  bezierVertex(
    x - 120 * s,
    y + 20 * s,
    x - 80 * s,
    y + 20 * s,
    x - 80 * s,
    y + 90 * s
  );
  endShape();
  beginShape();
  vertex(x + 120 * s, y + 90 * s);
  bezierVertex(
    x + 120 * s,
    y + 20 * s,
    x + 80 * s,
    y + 20 * s,
    x + 80 * s,
    y + 90 * s
  );
  endShape();

  //window
  fill(0, 191, 255);
  ellipse(x, y, s * 55);
  fill(0, 255, 255);
  ellipse(x, y, s * 40);
  fill(255, 255, 255);
  ellipse(x - 12 * s, y - 4 * s, s * 8);
  ellipse(x - 3 * s, y - 10 * s, s * 11);

  //top of the spaceship
  fill(100, 255, 0);
  beginShape();
  vertex(x - 60 * s, y - 50 * s);
  bezierVertex(
    x - 20 * s,
    y - 40 * s,
    x + 20 * s,
    y - 40 * s,
    x + 60 * s,
    y - 50 * s
  );
  bezierVertex(
    x + 20 * s,
    y - 100 * s,
    x - 20 * s,
    y - 100 * s,
    x - 60 * s,
    y - 50 * s
  );
  endShape();

  //antenna on top
  fill(255, 255, 255);
  stroke(255, 255, 255);
  strokeWeight(4);
  line(x + s, y - 80 * s, x + s, y - 105 * s);
  ellipse(x + s, y - 105 * s, s * 8);
}

//astronaut guy sad
function astronaut1() {
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(1);
  //body
  rect(x - 80 * s, y + 65 * s, 20 * s, 20 * s);
  //head
  ellipse(x - 70 * s, y + 51 * s, 40 * s);
  //arms
  ellipse(x - 82.5 * s, y + 75 * s, 7.5 * s, 15 * s);
  ellipse(x - 57.5 * s, y + 75 * s, 7.5 * s, 15 * s);
  //feet
  ellipse(x - 75 * s, y + 85 * s, 11 * s);
  ellipse(x - 65 * s, y + 85 * s, 11 * s);
  noStroke();
  fill(200, 200, 200);
  ellipse(x - 75 * s, y + 85 * s, 7.5 * s);
  ellipse(x - 65 * s, y + 85 * s, 7.5 * s);
  //face
  fill(0, 0, 0);
  ellipse(x - 70 * s, y + 60 * s, 30 * s, 15 * s);
  fill(255, 255, 255);
  ellipse(x - 80 * s, y + 57.5 * s, 5 * s, 2.5 * s);

  //tear
  fill(0, 191, 255);
  beginShape();
  vertex(x - 80 * s, y + 62.5 * s);
  bezierVertex(
    x - 90 * s,
    y + 75 * s,
    x - 70 * s,
    y + 75 * s,
    x - 80 * s,
    y + 62.5 * s
  );
  endShape();
}

// astronaut guy happy
function astronaut2() {
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(1);
  //body
  rect(x - 80 * s, y + 65 * s, 20 * s, 20 * s);
  //head
  ellipse(x - 70 * s, y + 51 * s, 40 * s);
  //arms
  ellipse(x - 86 * s, y + 71 * s, 15 * s, 7.5 * s);
  ellipse(x - 57.5 * s, y + 75 * s, 7.5 * s, 15 * s);
  //feet
  rect(x - 78.5 * s, y + 85 * s, 7.5 * s, 7.5 * s);
  rect(x - 69 * s, y + 85 * s, 7.5 * s, 7.5 * s);
  ellipse(x - 76.5 * s, y + 93 * s, 10 * s, 6 * s);
  ellipse(x - 63 * s, y + 93 * s, 10 * s, 6 * s);
  //face
  noStroke();
  fill(0, 0, 0);
  ellipse(x - 70 * s, y + 49.5 * s, 32.5 * s, 27.5 * s);
  push();
  translate(x - 80 * s, y + 45 * s);
  rotate(2.2);
  fill(255, 255, 255);
  ellipse(0, 0, 9 * s, 5 * s);
  pop();
  //flag
  noStroke();
  fill(100, 255, 0);
  rect(x - 135 * s, y + 7.5 * s, 40 * s, 30 * s);
  stroke(255, 255, 255);
  strokeWeight(3);
  line(x - 92.5 * s, y + 80 * s, x - 92.5 * s, y + 5 * s);
}

fire();
spaceship();
satellite();
planets();
meteor();

/*let meteorX = 70;

function draw() {
  meteor();
  meteorX = meteorX + 5;
} */

// Make a satellite in the sky! Or like some spaceship or planets or something.
