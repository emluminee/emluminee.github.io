var ballx = 300;
var bally = 300;
var ballSize = 40;
var rectX = 100;   // x-coordinate for the rectangle
var rectY = 100;   // y-coordinate for the rectangle
var score = 0;
var gameState = "L1";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(204, 242, 241); // light blue background

  // Handling game levels
  if (gameState == "L1") {
    levelOne();
  } 
  else if (gameState == "L2") {
    levelTwo();
  }
  else if (gameState == "L3") {
    levelThree();
  }
  else if (gameState == "L4") {
    levelFour();
  }

  // Display score at the top
  text("Score: " + score, width / 2, 40);
} // end of draw

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score += 1;
  }
  
  if (score > 5) {
    gameState = "L2";  // Transition to Level 2
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
} // end of level 1

function levelTwo() {
  background(255, 156, 143); // light red background
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score += 1;
  }

  if (score > 10) {
    gameState = "L3";  // Transition to Level 3
  }

  fill(204, 242, 241); // light blue
  ellipse(ballx, bally, ballSize, ballSize);

  fill(255, 214, 139); // light yellow
  rect(ballx, bally, ballSize, ballSize);
} // end of level 2

function levelThree() {
  background(241, 105, 37); // orange background
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score += 1;
  }

  if (score > 15) {
    gameState = "L4";  // Transition to Level 4
  }

  fill(204, 242, 241); // light blue
  ellipse(ballx, bally, ballSize, ballSize);

  fill(255, 214, 139); // light yellow
  rect(ballx, bally, ballSize, ballSize);
} // end of level 3

// Level 4 handling
function levelFour() {
  background(116, 168, 255); // light blue background for Level 4
  text("Level 4 - Final!", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score += 1;
  }

  // Display a "Game Over" or similar message if desired
  if (score > 20) {
    text("Congratulations! You Win!", width / 2, height / 2);
  }

  fill(204, 242, 241); // light blue
  ellipse(ballx, bally, ballSize, ballSize);
} // end of level 4
