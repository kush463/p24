const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1 , dustbin2 , dustbin3;
var ground1 ;

function preload()
{
  
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  dustbin1 = new dustbin(1200 , 653);
 
  ground1 = new ground(800,680,1600,20);

  paperObject = new paper(100 , 450 , 50);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbin1.display();

  ground1.display();
  paperObject.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paperObject.body , paperObject.body.position ,{x:165 , y:-135});
  }
}
