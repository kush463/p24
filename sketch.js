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
	createCanvas(800, 700);

  this.body = Bodies.circle(100,100,20);
  fill(128,0,128);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  dustbin1 = new dustbin(550 , 590 , 25 , 150);
  dustbin2 = new dustbin(700 , 590 , 25 , 150);
  dustbin3 = new dustbin(625 , 655 , 175 , 25);

  ground1 = new ground(400,680,1000,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(100,640,this.r , this.r);
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(this.body , this.body.position ,{x:85 , y:-85});
  }
}
