var fixedRect, movingRect;
var obg1,obg2,obg3 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obg1 = createSprite(40,20,80,30);
  obg1.shapeColor = "green";
  obg1.debug = true;

  obg2 = createSprite(120,20,80,30);
  obg2.shapeColor = "green";
  obg2.debug = true;

  obg3 = createSprite(190,20,80,30);
  obg3.shapeColor = "green";
  obg3.debug = true;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(obg3,movingRect)){
   
    movingRect.shapeColor = "red";
    obg3.shapeColor = "red";
  
  }

  else {
    movingRect.shapeColor = "green";
    obg3.shapeColor = "green";
   
  }

  drawSprites();
}

