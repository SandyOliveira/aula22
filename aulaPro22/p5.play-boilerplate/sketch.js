//cria o mecanismo de fisica
const Engine = Matter.Engine
//cria o mundo  de fisica e adione os objetos nele
const World = Matter.World;
//cria os objetos fisicos que habitam o mundo
const Bodies = Matter.Bodies; 


var engine;
var world;
var objecto;

function setup() {
  createCanvas(400,400);
  //cria mecanismo de fisica
  engine = Engine.create();
  //adiciona ao mundo o mecanismo de fisica
  world  = engine.world;
  
  var options = {
    isStatic: true

  }

  objecto = Bodies.rectangle(200,200,50,50,options);
  World.add(world,objecto);
  console.log(objecto);
  console.log(objecto.position.x)
  console.log(objecto.position.y)
  console.log(objecto.type)


}

function draw() {
  background("black");  
  rectMode(CENTER);
  
  rect(objecto.position.x,objecto.position.y,50,50);
  
}