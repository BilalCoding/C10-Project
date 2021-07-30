var seaImage;
var shipImage;
var sea;
var ship;

function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 400, 400);
  sea.addImage("sea", seaImage);
  
  
  ship = createSprite(100, 300, 50, 50);
  ship.addAnimation("ship", shipImage);
  ship.scale = 0.2;
}

function draw() {
  background("blue");

  sea.velocityX = -2;
  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
  
  drawSprites();
}