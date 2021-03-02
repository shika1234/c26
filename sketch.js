
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground1;
var r1Sprite,r2Sprite,r3Sprite
var r1Body,r2Body,r3Body;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
//	ball=new paper(100,780,50,50);
//	ground1=new ground(350,770,700,10);
	Engine.run(engine);

  
}


function draw() {
  background("blue");
  Engine.update(engine);

//ball.display();
//ground1.display();
  
 
}

   
   



