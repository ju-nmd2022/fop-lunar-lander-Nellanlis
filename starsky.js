let particles = [];

fill(145, 145, 145);
rect(0, 450, 100, 100);

push();
function createParticle() {
  const x = Math.random() * width;
  const y = Math.random() * height;
  return { x: x, y: y };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 255, 255, 100);
  ellipse(0, 0, 1.4);
  pop();
}

function updateParticle(particle) {
  particle.x = particle.x;
  particle.y = particle.y;
}

for (let i = 100; i < 200; i++) {
  const particle = createParticle();
  particles.push(particle);
}

function draw() {
  background(0, 0, 0);
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }
}
pop();
