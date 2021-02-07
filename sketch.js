
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  //canvas(600,600)
  monkey = createSprite(80,315,30,30)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.3;
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX=-4;
  
  var survivalTime = createSprite(100,100,10,10);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
}

function draw() {
  background("red");
  
  //jump when the space key is pressed
    if(keyDown("space")&& trex.y >= 100) {
        monkey.velocityY = -12;
        jumpSound.play();
    }
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  //stop trex from falling down
  monkey.collide(ground);
  
   score = score + Math.round(getFrameRate()/60);
  
  drawSprites();
}
function spawnBananas(){
 if (frameCount % 60 === 0){
   var banana = createSprite(600,165,10,40);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.5;
   banana.velocityX = -3;
   
   //assign lifetime to the variable
    banana.lifetime = 200;
    
   BananaGroup.add(banana);
 }  
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    obstacle.addImage("obstacle",obstacleImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}






