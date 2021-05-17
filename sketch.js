
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;


function setup() {
	createCanvas(1200, 750);
	rectMode(CENTER);

	//keyPressed();
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(800,650);
       paper=new Paper (50,550,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  keyPressed();

groundObject.display();
  dustbinObj.display();
paper.display();



}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-145})


}}