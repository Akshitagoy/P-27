
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var hammer,plane,stone,rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,iron;
function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	
   hammer = new Hammer(10,100);
   plane = new Plane(600,height,1200,20)
	rubber = new Rubber(200,320,70)
  stone = new Stone(700,320,100,100);
  iron = new Iron(350,320);
  
  sand1 = new Sand(505,450,10)
  sand2 = new Sand(510,450,10)
  sand3 = new Sand(515,450,10)
  sand4 = new Sand(520,450,10)
  sand5 = new Sand(525,445,10)
  sand6 = new Sand(515,445,10)
  sand7 = new Sand(520,445,10)
  sand8 = new Sand(525,445,10)

}


function draw() {
  background(0);
  Engine.update(engine);
 
  hammer.display();
  plane.display();
  rubber.display();
  stone.display();
iron.display();

sand1.display()
sand2.display()
sand3.display()
sand4.display()
sand5.display()
sand6.display()
sand7.display()
sand8.display()
}



