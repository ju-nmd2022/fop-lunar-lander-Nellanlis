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
function joinParticle(particle) {
  let dis = dist(particle.x, particle.y);
  if (dis < 40) {
    stroke(255, 255, 255, 0.04);
    line(particle.x, particle.y);
  }
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
    joinParticle(particle.slice(i));
  }
}
pop();

fill(145, 145, 145);
rect(0, 450, 600, 120);
