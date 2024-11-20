var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(148, 194, 218);   // ocean color background

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(231, 211, 170);  // yellow beam
    ellipse(mouseX, mouseY, 10, 10);
    line(mouseX, mouseY, 20, 10);1
    
  } else if (toolChoice == '2') { // second tool
  
    stroke(104, 125, 49);  // green grass
    fill(104, 125, 49);  // green grass
    rect(mouseX, mouseY, 30, 100);
    
    
  } else if (toolChoice == '3') { // third tool

    stroke(255, 255, 255);  // white clouds
    fill(255, 255, 255);  // white clouds
ellipse(mouseX, mouseY, 20, 10);
    
  } else if (toolChoice == '4') {  //fourth tool

    stroke(239, 161, 38);  // yellow lines
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // fifth tool
  
    stroke(94, 45, 133);  // purple circles
    fill(94, 45, 133);  // purple circles
    ellipse(mouseX, mouseY, 10, 10);
 
  } else if (toolChoice == '6') { // sixth

    stroke(200);
    triangle(mouseX, mouseY, mouseX - 10, mouseY + 5, mouseX + 10, mouseY + 5);
    
  } else if (toolChoice == '7') { //seventh

        stroke(232, 71, 151);  // pink
        fill(232, 71, 151);  // pink
ellipse(mouseX, mouseY, 20, 10);
    
  } else if (toolChoice == '8') { // eighth

    stroke(94, 222, 179); // teal
    fill(94, 222, 179);  // teal
    rect(mouseX, mouseY, 5, 20);
    
  } else if (toolChoice == '9') { // ninth

        stroke(25,53,12);  // dark green
    fill(25,53,12);  // dark green 
    rect(mouseX, mouseY, 30, 30);
    
  } else if (toolChoice == '0') {  // zero
    stroke(32, 63, 154); // blue line
    line(mouseX, mouseY, pmouseX, pmouseY);
 }

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
