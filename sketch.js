
var speed;
var weight;
var car;
var wall;


function setup() {
  createCanvas(800,400);
 car = createSprite(50,200,50,20);
car.shapeColor=color(255);
car.velocityX=speed;


speed=random(55,90);
weight=random(400,1150);

wall = createSprite(1500,200,60,height/2);
wall.shapeColor=color(80,80,80);





}

function draw() {
  background(50); 
  if(ball.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;
if(deformation>180){
car.shapeColor=color(255,0,0)
}





  }
  


  drawSprites();
}