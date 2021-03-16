
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 450, 30);

    ground = new Ground(800, 670, 1600, 20);

    leftSide = new Dustbin(550, 620, 30, 200);
    bottom = new Dustbin(610, 660, 100, 20);
    rightSide = new Dustbin(670,  620, 30, 200);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:125, y: -135})
     
	}
}


