var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50,200,30,30);
  wall = createSprite(700,200,40,height/2);
  wall.shapeColor=color(80,80,80);
  speed = random(5,9);
  weight = random(4,15);
  car.velocityX=speed;
  deformation= (0.5*weight*speed*speed)/2;
}

function draw() {
  background(0,0,0);
  if(wall.x-car.x<car.width/2+wall.width/2){
    if(deformation<100){
      car.shapeColor=color(0,255,0);
      car.velocityX=0;
    }
    if(deformation>100 && deformation<180){
      car.shapeColor=color(230,230,0);
      car.velocityX=0;
    }
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      car.velocityX=0;
    }
  }
  else{
    car.shapeColor=color(80,80,80);
  }
  drawSprites();
}