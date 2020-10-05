var trex_running;
var ground, groundImage;
var invisibleGround;
var trex
var cloudGroup,cloudImage, obstacleGroup; 
var obstacleImage1, obstacleImage2, obstacleImage3, obstacleImage4, obstacleImage5, obstacleImage6;
var score;
function preload(){
  //load the trex animation into the var trex_running.
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  
  //load the ground image into the variable groundImage.
  groundImage = loadImage("ground2.png");

  //load the cloud image into the var cloud.png
  cloudImage = loadImage("cloud.png");
  
  //load the obstacle image into the var obstacleImage1
  obstacleImage1 = loadImage("obstacle1.png");

  //load the obstacle image into the var obstacleImage2.
   obstacleImage2 = loadImage("obstacle2.png");
  
  //load the obstacle image into the var obstacleImage3.
   obstacleImage3 = loadImage("obstacle3.png");
  
  //load the obstacle image into the var obstacleImage4.
   obstacleImage4 = loadImage("obstacle4.png");
  
  //load the obstacle image into the var obstacleImage5.
   obstacleImage5 = loadImage("obstacle5.png");
  
  //load the obstacle image into the var obstacleImage6.
   obstacleImage6 = loadImage("obstacle6.png");
}
function setup() {
  createCanvas(600, 200);
  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  
  //create ground sprite.
  ground = createSprite(300, 190, 20, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width/2;
  ground.velocityX = -3;
  
  //create an invisible ground to suport trex.
  invisibleGround = createSprite(300, 195, 600, 5);
  invisibleGround.visible = false;   
  
  //createing new group
  cloudGroup = new Group()
  
  obstacleGroup = new Group()
 score = 0;
  
}

function draw() {
  background(180);
 //jump when the space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10 ;
  }
  
  // reset the ground.
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8;
  
  //stop trex from falling down
  trex.collide(invisibleGround);     
  
  //call the function spawn cloud
  spawnClouds();
 
  //call the function spawn obstacles
  spawnObstacles();
  
  text ("score ="+score, 540, 40);
    
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
 if (World.frameCount%60 ==0){
   var R = Math.round(random(75, 90));
  var cloud = createSprite(600, R, 20, 20);
 cloud.addImage("cloud", cloudImage);
  cloud.velocityX = -3
  cloud.scale = 0.75;
  cloud.depth = trex.depth;
  trex.depth = trex.depth+1;
  cloud.lifetime = 600/3;
  cloudGroup.add(cloud);
  
  }
}
function spawnObstacles (){
  if (World.frameCount%100 ==0){
   var r = Math.round(random(1,6))
  
  var obstacle = createSprite(580, 180, 20, 20);
  if (r==1){
    obstacle.addImage("obstacle1", obstacleImage1);
  }
  if (r==2){
    obstacle.addImage("obstacle2" , obstacleImage2);
  }  
  if (r==3){
    obstacle.addImage("obstacle3", obstacleImage3);
  }  
  if (r==4){
    obstacle.addImage("obstacle4", obstacleImage4);
  }
  if (r==5){
    obstacle.addImage("obstacle5", obstacleImage5);
  }  
  if (r==6){
    obstacle.addImage("obstacle6", obstacleImage6);
  }  
  obstacle.velocityX = -6
  //distroying the obstacles after it crocess the canvas.
  obstacle.lifetime = 600/3;
  obstacle.scale = 0.45
  obstacleGroup.add(obstacle);
}
}