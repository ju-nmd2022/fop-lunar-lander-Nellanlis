let particles = [];

//stars in the sky
background(0, 0, 0);

push();
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
let s = 1;
noStroke();

function spaceship() {
  // yellow spacers
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

  //fire

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

spaceship();
