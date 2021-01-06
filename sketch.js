var car,wall;

var speed,weight;

function setup() {
  createCanvas(1500,400);

  speed=random(55,90);
  weight=random(400,1500);

 car=createSprite(50, 200, 50, 50);
 car.valocityX = speed;
 car.shapeColor="grey";

 wall=createSprite(1300,200,60 ,height/2);
 wall.shapeColour="grey";
}

function draw() {
  background(255,255,255); 
  
  car.x=World.mouseX;
  car.y=World.mouseY;

  if(car.x-wall.x<=wall.width/2+car.width/2
    && wall.x-car.x<=wall.width/2+car.width/2
    && car.y-wall.y<=wall.height/2+car.height/2
    && wall.y-car.y<=wall.height/2+car.height/2 )
    {car.shapeColor="green"
      car.shapeColor="yellow"
      car.shapeColor="red"}
  
      else{
        car.shapeColor="grey";
      }

  drawSprites();
}