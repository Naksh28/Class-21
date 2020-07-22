var fixedRect, movingRect, Rect1, Rect2, ball1, ball2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(200,200,40,70);
  movingRect.shapeColor = "blue";
  Rect1 = createSprite(100,100,30,50);
  Rect1.shapeColor = "green";
  Rect1.velocityX = 3;
  Rect2 = createSprite(300,100,40,50);
  Rect2.shapeColor = "yellow";
  Rect2.velocityX = -4;
  ball1 = createSprite(200,100,20,20);
  ball1.shapeColor = "white";
  ball1.velocityY = 3;
  ball2 = createSprite(200,300,10,10);
  ball2.shapeColor = "orange";
  ball2.velocityY = -3;
}

function draw() {
  background(0);
  edges = createEdgeSprites();

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(Rect1, Rect2);
  bounceOff(ball1, ball2);
  if (collide(ball1, edges[2])) {
    ball1.velocityY = 3;
  }

  if (collide(ball2, edges[3])) {
    ball2.velocityY = -3;
  }

  if (collide(Rect1, edges[0])) {
    Rect1.velocityX = 3;
  }

  if (collide(Rect2, edges[1])) {
    Rect2.velocityX = -3;
  }

    if (collide(movingRect, fixedRect)) {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}

function collide (object1, object2) {
  if (object1.x-object2.x<(object1.width+object2.width)/2
  && object2.x-object1.x<(object1.width+object2.width)/2
  && object1.y-object2.y<(object1.height+object2.height)/2
  && object2.y-object1.y<(object1.height+object2.height)/2) {
    return true;
  }
  else 
  return false;
}

function bounceOff (object1, object2) {
  if (object1.x-object2.x<(object1.width+object2.width)/2
  && object2.x-object1.x<(object1.width+object2.width)/2) {
    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);
  }

  if (object1.y-object2.y<(object1.height+object2.height)/2
  && object2.y-object1.y<(object1.height+object2.height)/2) {
    object1.velocityY = object1.velocityY*(-1);
    object2.velocityY = object2.velocityY*(-1);
  }
}