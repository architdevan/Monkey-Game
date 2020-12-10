
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var Animation
var collide
var survivalTime=0;
var obstacles

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
function draw() {
  //jump when the space key is pressed
  if(keyDown("space")&& monkey.y >= 362){
      monkey.velocityY = -12;
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;

  drawSprites();
}
//stop monkey from falling down
monkey.collide(invisibleGround);
    
function food(){
  banana=createSprite(80,315,20,20);
  position.y = 120
  banana.addAnimation("banana");
  position.velocityX = -4;
  position.Lifetime = 100;  
  bananaGroup.destroyEach();
 }               
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -(6 + score/100);
    obstacle.Lifetime = 100;
  }   
}    
    
var survivalTime=0;
    
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
