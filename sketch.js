var runner, runnerImg, pathImg, path,boundary1,boundary2;

function preload(){
  //pre-load images
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(800,800);
  
  //create sprites here
  

  //creating path
  path = createSprite(400,400,800,800) ;
  path.addImage(pathImg);
  path.scale=2;

  //creating player
  runner = createSprite(400,700,5,7);
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.1;

  //creating invisible boundaries
  boundary2 = createSprite(0,200,100,400);
  boundary2.visible = false; 

  boundary1 = createSprite(400,200,100,400);
  boundary1.visible = false;  
}

function draw() {
  background(0);
runnerImg.x=mouseX;
  //code to reset the background
  if (path.y > 400){
    path.y = height/4;
    path.velocityY=4
  } 

  //moving background
  
  //creating controlls of the runner
  
  
  

  drawSprites();
}