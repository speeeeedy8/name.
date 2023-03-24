// frameCount - a variable containing frame count
let frameCount = 0;
let yOffset = 100;
let myColor = "orange";
let imgl;

function preload(){
}

function setup() {
  // standard initialization
  createCanvas(600, 400);  
  frameRate(60);
  background(220); 
  img1 = loadImage("poetry20.png");
}
 
function draw() {
  image(img1,50+mouseX,50 + mouseY,80,80)
  
  // background(220);  
   // draw
  // console.log(frameCount, frameCount % 100);
  let xOffset = (frameCount % (width + 80)) - 50;
  
  
  if (mouseX < width / 2) {
    myColor = "purple";
  } else {
    myColor = "green"    
  } 
  
  // val = input("who are you");
  
  // if (mouseY )
  
  // circle(x,               y,  diameter)
  fill("white");
  circle(xOffset,yOffset,50);
  fill(myColor);
  circle(xOffset,yOffset + 30,50);
  
  /*
    if (x>y) {
        // Do 1
    } else {
      // Do 2
    }
  */
  if (xOffset >= (width + 25)) {
   // do something
    yOffset += 50;
    frameCount = -20;
  }
 
  
  frameCount++;
  /*
  frameCount += 1;
  frameCount = frameCount+1;
  */
  
   // mouseX mouseY
   // circle(x,y,diameter)
   rect(mouseX,mouseY,50)
}