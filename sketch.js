var fixedRect, movingRect;
var rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100,150,50,60);
  rect1.shapeColor = "blue";
  rect2 = createSprite(150,170,50,60);
  rect2.shapeColor = "yellow";
  rect3 = createSprite(100,100,50,60);
  rect3.shapeColor = "pink";
  movingRect.velocityX=+5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(rect2,movingRect)){
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";

 }

 else {
  movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
 }
 bounceOff(movingRect,fixedRect);
  drawSprites();
}

function isTouching(object1,object4){
  if (object1.x - object4.x < object4.width/2 + object1.width/2
    && object4.x - object1.x < object4.width/2 + object1.width/2
    && object1.y - object4.y < object4.height/2 + object1.height/2
    && object4.y - object1.y < object4.height/2 + object1.height/2) {
 

  return true;
}
else {
 

  return false;
}
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
  {
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);

  }
  else if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);

  }
}