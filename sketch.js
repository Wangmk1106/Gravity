const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;


function setup() {
 var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;


 var ground_options ={
   isStatic:true
 }
 ground = Bodies.rectangle(200,390,50,50,ground_options);
 World.add(world,ground);
 var ball_option={
   restitution:1.0 
 }
ball=Bodies.circle(200,100,20,ball_option);
World.add(world,ball);

 //console.log(object1);
// console.log(object.type)
 //console.log(object1.position.x);
// console.log(object1.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  
}