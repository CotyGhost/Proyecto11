var sea,seaImage;
var ship,shipAnimation;
function preload(){
seaImage=loadImage("sea.png");
shipAnimation=loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400);
  sea.addImage("sea",seaImage);
}

function draw() {
  background("blue");
 drawSprites();
}