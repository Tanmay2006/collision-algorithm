var movingRect, fixedRect ;
function setup() {
  createCanvas(800,400);
movingRect= createSprite(400,200,50,80);
movingRect.shapeColor="blue";
fixedRect= createSprite(300,100,80,30);
fixedRect.shapeColor="yellow";

movingRect.debug=true;
fixedRect.debug=true;

}

function draw() {
  //0-255
  background(0);
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2 )
   {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
    
  
  drawSprites();
}