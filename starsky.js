// the spaceship
let x = 300;
let y = 50;
let s = 0.5;
let meteorX = 300;
let meteorY = 300;
let satelliteX = 300;
let satelliteY = 300;
let biggerX = 300;
let biggerY = 300;
let biggerS = 2;

//start button screen
function startScreen() {
  fill(255, 255, 255);
  noStroke();
  textSize(50);
  text("Press SPACE", 150, 230);
  textSize(40);
  text("to start the game", 155, 295);

  fill(255, 255, 255);
  textSize(14);
  text("land the spaceship slowly and securely on the moon", 145, 350);
  text("hold down the space button to move the spaceship upwards", 120, 380);
  planets();
}

function meteor() {
  //meteor
  push();
  background(0, 0, 0);
  noStroke();
  push();
  fill(255, 255, 255, 200);
  ellipse(meteorX - 320, meteorY - 199, 15);
  pop();
  beginShape();
  vertex(meteorX - 320, meteorY - 205);
  vertex(meteorX - 360, meteorY - 210);
  vertex(meteorX - 323, meteorY - 195);
  endShape();
  pop();
}

// Stars in the sky, inspired by Garrit's lecture

const particles = [];

background(0, 0, 0);

function createParticle() {
  const x = Math.random() * width;
  const y = Math.random() * height;
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

function moon() {
  fill(50, 50, 50);
  rect(0, 450, width, 120);
  fill(100, 100, 100);
  ellipse(300, 480, 200, 30);
}

function satellite() {
  noStroke();
  push();
  translate(satelliteX - 300, satelliteY - 260);
  rotate(-0.09999);

  //satellite body
  fill(255, 255, 255);
  stroke(255, 255, 255);
  beginShape();
  vertex(satelliteX + 150, satelliteY - 150);
  bezierVertex(
    satelliteX + 150,
    satelliteY - 160,
    satelliteX + 170,
    satelliteY - 160,
    satelliteX + 170,
    satelliteY - 150
  );
  vertex(satelliteX + 170, satelliteY - 130);
  bezierVertex(
    satelliteX + 170,
    satelliteY - 120,
    satelliteX + 150,
    satelliteY - 120,
    satelliteX + 150,
    satelliteY - 130
  );
  endShape(CLOSE);

  //top orange bit
  fill(255, 95, 0);
  noStroke();
  ellipse(satelliteX + 160, satelliteY - 153, 20, 10);
  fill(255, 150, 0);
  ellipse(satelliteX + 160, satelliteY - 153, 13, 6);

  //ball on top
  fill(0, 191, 255);
  ellipse(satelliteX + 160, satelliteY - 161, 16);
  ellipse(satelliteX + 160, satelliteY - 143, 6);
  fill(255, 255, 0);
  ellipse(satelliteX + 160, satelliteY - 135, 3);

  //wings of satellite
  fill(50, 205, 50);
  rect(satelliteX + 120, satelliteY - 150, 25, 20);
  rect(satelliteX + 175, satelliteY - 150, 25, 20);
  fill(255, 255, 0);
  rect(satelliteX + 124, satelliteY - 147, 6, 6);
  rect(satelliteX + 124, satelliteY - 139, 6, 6);
  rect(satelliteX + 132, satelliteY - 147, 6, 6);
  rect(satelliteX + 132, satelliteY - 139, 6, 6);
  rect(satelliteX + 179, satelliteY - 147, 6, 6);
  rect(satelliteX + 179, satelliteY - 139, 6, 6);
  rect(satelliteX + 187, satelliteY - 147, 6, 6);
  rect(satelliteX + 187, satelliteY - 139, 6, 6);
  pop();
}

function planets() {
  noStroke();
  fill(255, 255, 255, 30);
  ellipse(satelliteX + 45, satelliteY - 200, 25);
  ellipse(satelliteX - 150, satelliteY - 100, 20);
  fill(255, 255, 255, 70);
  ellipse(satelliteX + 140, satelliteY - 50, 10);
  ellipse(satelliteX - 190, satelliteY - 140, 30);
  ellipse(satelliteX + 250, satelliteY - 240, 30);
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
  vertex(x + 30 * s, y + 60 * s);
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

function biggerSpaceship() {
  //bigger spaceship for end screens

  //yellow spacers
  push();
  translate(biggerX - 80 * biggerS, biggerY + 40 * biggerS);
  rotate(2.5);
  fill(255, 255, 0);
  rect(-30 * biggerS, -20 * biggerS, 50 * biggerS, 30 * biggerS);
  pop();

  push();
  translate(biggerX + 60 * biggerS, biggerY + 20 * biggerS);
  rotate(0.7);
  fill(255, 255, 0);
  rect(0 * biggerS, -9 * biggerS, 50 * biggerS, 30 * biggerS);
  pop();

  //yellow by fire
  fill(255, 255, 0);
  beginShape();
  vertex(biggerX + 30 * biggerS, biggerY + 60 * biggerS);
  vertex(biggerX - 30 * biggerS, biggerY + 60 * biggerS);
  vertex(biggerX - 35 * biggerS, biggerY + 80 * biggerS);
  bezierVertex(
    biggerX - 10 * biggerS,
    biggerY + 75 * biggerS,
    biggerX + 10 * biggerS,
    biggerY + 75 * biggerS,
    biggerX + 35 * biggerS,
    biggerY + 80 * biggerS
  );
  endShape();

  //body
  fill(255, 16, 240);
  ellipse(biggerX, biggerY, 150 * biggerS);

  // feet
  beginShape();
  vertex(biggerX - 120 * biggerS, biggerY + 90 * biggerS);
  bezierVertex(
    biggerX - 120 * biggerS,
    biggerY + 20 * biggerS,
    biggerX - 80 * biggerS,
    biggerY + 20 * biggerS,
    biggerX - 80 * biggerS,
    biggerY + 90 * biggerS
  );
  endShape();
  beginShape();
  vertex(biggerX + 120 * biggerS, biggerY + 90 * biggerS);
  bezierVertex(
    biggerX + 120 * biggerS,
    biggerY + 20 * biggerS,
    biggerX + 80 * biggerS,
    biggerY + 20 * biggerS,
    biggerX + 80 * biggerS,
    biggerY + 90 * biggerS
  );
  endShape();

  //window
  fill(0, 191, 255);
  ellipse(biggerX, biggerY, biggerS * 55);
  fill(0, 255, 255);
  ellipse(biggerX, biggerY, biggerS * 40);
  fill(255, 255, 255);
  ellipse(biggerX - 12 * biggerS, biggerY - 4 * biggerS, biggerS * 8);
  ellipse(biggerX - 3 * biggerS, biggerY - 10 * biggerS, biggerS * 11);

  //top of the spaceship
  fill(100, 255, 0);
  beginShape();
  vertex(biggerX - 60 * biggerS, biggerY - 50 * biggerS);
  bezierVertex(
    biggerX - 20 * biggerS,
    biggerY - 40 * biggerS,
    biggerX + 20 * biggerS,
    biggerY - 40 * biggerS,
    biggerX + 60 * biggerS,
    biggerY - 50 * biggerS
  );
  bezierVertex(
    biggerX + 20 * biggerS,
    biggerY - 100 * biggerS,
    biggerX - 20 * biggerS,
    biggerY - 100 * biggerS,
    biggerX - 60 * biggerS,
    biggerY - 50 * biggerS
  );
  endShape();

  //antenna on top
  fill(255, 255, 255);
  stroke(255, 255, 255);
  strokeWeight(4);
  line(
    biggerX + biggerS,
    biggerY - 80 * biggerS,
    biggerX + biggerS,
    biggerY - 105 * biggerS
  );
  ellipse(biggerX + biggerS, biggerY - 105 * biggerS, biggerS * 8);
}

//astronaut guy sad
function astronaut1() {
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(1);
  //body
  rect(
    biggerX - 80 * biggerS,
    biggerY + 65 * biggerS,
    20 * biggerS,
    20 * biggerS
  );
  //head
  ellipse(biggerX - 70 * biggerS, biggerY + 51 * biggerS, 40 * biggerS);
  //arms
  ellipse(
    biggerX - 82.5 * biggerS,
    biggerY + 75 * biggerS,
    7.5 * biggerS,
    15 * biggerS
  );
  ellipse(
    biggerX - 57.5 * biggerS,
    biggerY + 75 * biggerS,
    7.5 * biggerS,
    15 * biggerS
  );
  //feet
  ellipse(biggerX - 75 * biggerS, biggerY + 85 * biggerS, 11 * biggerS);
  ellipse(biggerX - 65 * biggerS, biggerY + 85 * biggerS, 11 * biggerS);
  noStroke();
  fill(200, 200, 200);
  ellipse(biggerX - 75 * biggerS, biggerY + 85 * biggerS, 7.5 * biggerS);
  ellipse(biggerX - 65 * biggerS, biggerY + 85 * biggerS, 7.5 * biggerS);
  //face
  fill(0, 0, 0);
  ellipse(
    biggerX - 70 * biggerS,
    biggerY + 60 * biggerS,
    30 * biggerS,
    15 * biggerS
  );
  fill(255, 255, 255);
  ellipse(
    biggerX - 80 * biggerS,
    biggerY + 57.5 * biggerS,
    5 * biggerS,
    2.5 * biggerS
  );

  //tear
  fill(0, 191, 255);
  beginShape();
  vertex(biggerX - 80 * biggerS, biggerY + 62.5 * biggerS);
  bezierVertex(
    biggerX - 90 * biggerS,
    biggerY + 75 * biggerS,
    biggerX - 70 * biggerS,
    biggerY + 75 * biggerS,
    biggerX - 80 * biggerS,
    biggerY + 62.5 * biggerS
  );
  endShape();
}

// astronaut guy happy
function astronaut2() {
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(1);
  //body
  rect(
    biggerX - 80 * biggerS,
    biggerY + 65 * biggerS,
    20 * biggerS,
    20 * biggerS
  );
  //head
  ellipse(biggerX - 70 * biggerS, biggerY + 51 * biggerS, 40 * biggerS);
  //arms
  ellipse(
    biggerX - 86 * biggerS,
    biggerY + 71 * biggerS,
    15 * biggerS,
    7.5 * biggerS
  );
  ellipse(
    biggerX - 57.5 * biggerS,
    biggerY + 75 * biggerS,
    7.5 * biggerS,
    15 * biggerS
  );
  //feet
  rect(
    biggerX - 78.5 * biggerS,
    biggerY + 85 * biggerS,
    7.5 * biggerS,
    7.5 * biggerS
  );
  rect(
    biggerX - 69 * biggerS,
    biggerY + 85 * biggerS,
    7.5 * biggerS,
    7.5 * biggerS
  );
  ellipse(
    biggerX - 76.5 * biggerS,
    biggerY + 93 * biggerS,
    10 * biggerS,
    6 * biggerS
  );
  ellipse(
    biggerX - 63 * biggerS,
    biggerY + 93 * biggerS,
    10 * biggerS,
    6 * biggerS
  );
  //face
  noStroke();
  fill(0, 0, 0);
  ellipse(
    biggerX - 70 * biggerS,
    biggerY + 49.5 * biggerS,
    32.5 * biggerS,
    27.5 * biggerS
  );
  push();
  translate(biggerX - 80 * biggerS, biggerY + 45 * biggerS);
  rotate(2.2);
  fill(255, 255, 255);
  ellipse(0, 0, 9 * biggerS, 5 * biggerS);
  pop();
  //flag
  noStroke();
  fill(100, 255, 0);
  rect(
    biggerX - 135 * biggerS,
    biggerY + 7.5 * biggerS,
    40 * biggerS,
    30 * biggerS
  );
  stroke(255, 255, 255);
  strokeWeight(3);
  line(
    biggerX - 92.5 * biggerS,
    biggerY + 80 * biggerS,
    biggerX - 92.5 * biggerS,
    biggerY + 5 * biggerS
  );
}

function gameScreen() {
  satellite();
  moon();
  planets();
  if (keyIsDown(32)) {
    fire(x, y, 0.5);
  }
  spaceship(x, y, 0.5);
}

let state = "start";
let velocity = 1;
let acceleration = 0.1;
let isGameActive = false;

function draw() {
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }
  push();
  meteor();
  if (meteorX < 950) {
    meteorX = meteorX + 4.5;
    meteorY = meteorY + 1;
  } else {
    meteorX = 300;
    meteorX = meteorX - 5;
    meteorY = meteorY - 2;
  }
  pop();

  //The different game screens and game mechanics
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }

  if (keyIsDown(32) && state === "start") {
    state = "game";
  } else if (keyIsDown(32) && state === "game" && y < 480) {
    isGameActive = true;
  } else if (keyIsDown(13) && (state === "lose" || state === "win")) {
    state = "game";
  }

  // not linear
  if (isGameActive) {
    y = y + velocity;
    velocity = velocity + acceleration;
  }

  //making it flyyyy
  if (keyIsDown(32)) {
    velocity = velocity - 0.4;
  }

  //where to land
  if (y > 432) {
    isGameActive = false;
  }

  if (velocity >= 1 && y >= 432) {
    isGameActive = false;
    state = "lose";
    y = 50;
    velocity = 1;
  } else if (velocity < 1 && y >= 432) {
    isGameActive = false;
    state = "win";
    y = 50;
    velocity = 1;
  }
}
function loseScreen() {
  noStroke();
  fill(50, 50, 50);
  rect(0, 370, width, 200);
  fill(100, 100, 100);
  ellipse(300, 480, 550, 90);
  biggerSpaceship();
  astronaut1();
  fill(255, 255, 255);
  textSize(25);
  text("You lost :(", 50, 80);
  textSize(18);
  text("press the enter key to start over", 30, 110);
}

function winScreen() {
  noStroke();
  fill(50, 50, 50);
  rect(0, 370, width, 200);
  fill(100, 100, 100);
  ellipse(300, 480, 550, 90);
  biggerSpaceship();
  astronaut2();
  fill(255, 255, 255);
  textSize(25);
  text("You win :)", 50, 80);
  textSize(18);
  text("press the enter key to start over", 30, 110);
}
