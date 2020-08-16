
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,box,box1,box2,paperImage,binImage;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box= new Box(675,590,150,115);
paper= new Ball(100,30);
ground= new Ground(400,600,800,20);
block1= new Block(600,540,5,100);
block2= new Block(750,540,5,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  paper.display();
paper.motion();
block1.display();
block2.display();

ground.display();
box.display();
text("press the up arrow key to throw the ball and any other key to make it fall.",400,50);
  drawSprites();
 
}



