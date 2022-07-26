
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_option={
		isStatic:true
	}
      block1=Bodies.circle(220,15,15,block1_options);
	  World.add(world,block1);
	  block2=Bodies.rectangle(110,50,10,50,block2_options);
	  World.add(world,block2);
	  block3 = Bodies.rectangle(350,50,10,10,block3_options);
	  World.add(world,block3);

	  var block1_options ={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	  }
	  var block2_options ={
		restitution:9.0,
		friction:10,
		frictionAir:2
	  }
	  var block3_options ={
		restitution:0.7,
		friction:2,
		frictionAir:0.8
	  }
	 
				
		


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("orange");
  drawSprites();
  
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,30);
  rect(block3.position.x,block3.position.y,40);

  rect(block2.position.x,block2.position.y,60,50);
  


  
  }
 




