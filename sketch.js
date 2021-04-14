
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var world,boy;
var stoneobj;
var slingobj;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1180,145,30);
	mango3=new mango(1030,180,30);
	mango4=new mango(1135,230,30);
  mango5=new mango(970,270,30);
	mango6=new mango(930,170,30);
	mango7=new mango(1000,80,30); 

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,70);
  stoneobj=new Stone(230,420,30);
  slingobj=new Sling(stoneobj.body,{x:235,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(187, 236, 250);
  //Add code for displaying text here!
  fill(38, 127, 153);
  stroke(33, 94, 112)
  textSize(21);
  text("Press Space to Play Again",50,50);

  image(boy ,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneobj.display();
  slingobj.display();

  groundObject.display();

  detection(stoneobj,mango1);
  detection(stoneobj,mango2);
  detection(stoneobj,mango3);
  detection(stoneobj,mango4);
  detection(stoneobj,mango5);
  detection(stoneobj,mango6);
  detection(stoneobj,mango7);
}

function mouseDragged() {

  Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});

}

function mouseReleased() {

  slingobj.fly()

}

function detection(ob1,ob2) {

mangoPosition=ob2.body.position;
stonePosition=ob1.body.position;

var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);

if(distance<=ob1.r+ob2.r){
  Matter.Body.setStatic(ob2.body,false);
}

}

function keyPressed(){

if(keyCode===32){
  Matter.Body.setPosition(stoneobj.body,{x:230,y:420})
  slingobj.attach(stoneobj.body);
}

}