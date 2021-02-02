
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  polygon= new Polygon(50,200,5);
  rubberband = new RubberBand(polygon.body,{x :100, y: 200});

	ground1= new Ground(400,500,1500,25);
  ground2= new Ground(385,350,250,15);
  ground3= new Ground(800,450,250,15);
	 

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    block16 = new Block(390,155,30,40);

    block17= new Block(750,150,30,40);
    block18= new Block(780,150,30,40)
    block19= new Block(810,150,30,40)
    block20= new Block(840,150,30,40)
    block21= new Block(870,150,30,40)

    block22= new Block(780,110,30,40)
    block23= new Block(810,110,30,40)
    block24= new Block(840,110,30,40)

    block25= new Block(810,70,30,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  Engine.update(engine)

  polygon.display();
  rubberband.display();
  fill("chocolate");
  ground1.display();
ground2.display();
ground3.display();

  fill("lightpink")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();


fill("lightyellow")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();


fill("aqua");

block13.display();
block14.display();
block15.display();

block22.display();
block23.display();
block24.display();
fill("palegreen");
block16.display();

block25.display();


fill("white")
text ("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",450,150)
textSize(60)


drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rubberband.fly();
}
