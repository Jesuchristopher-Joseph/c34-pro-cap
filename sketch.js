
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,ox7,box8,box9,box10;
var ball;
var rope;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,590,1200,20);
  box1 = new Box(700,500,150,100);
  box2 = new Box(700,400,150,100);
  box3 = new Box(700,300,150,100);
  box4 = new Box(700,200,150,100);
  box5 = new Box(700,100,150,100);
  box6 = new Box(200,500,150,100);
  box7 = new Box(200,400,150,100);
  box8 = new Box(200,300,150,100);
  box9 = new Box(200,200,150,100);
  box10 = new Box(200,100,150,100);


  ball = new Ball(200,200,80,80);
  rope = new Rope(ball.body,{x: 500, y: 50});
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ball.display();
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}

