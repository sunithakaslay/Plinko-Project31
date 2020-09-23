const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine, myworld, ground;
var divisions = [];
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);

  myengine = Engine.create();
  myworld = myengine.world;

  //creating the ground object
  ground = new Ground(240,height,480,20);

  //creating the vertical divisions in a for loop at a distance of 80 pixels
  for(var d = 0;d <= width; d = d+80){
    divisions.push(new Division(d, height - 30,5,200));
  }
  
  //creating the horizontal row of plinkos
  for(var pl = 40; pl <= width - 40; pl = pl+40){
    plinkos.push(new Plinko(pl,50));
  }
  for(var pl2 = 10; pl2 <= width-10; pl2 = pl2+40 ){
    plinkos.push(new Plinko(pl2,200));
  }

  for(var pl3 = 40; pl3 <= width - 40; pl3 = pl3+40){
    plinkos.push(new Plinko(pl3,350));
  }

  for(var pl4 = 10; pl4 <= width-10; pl4 = pl4+40 ){
    plinkos.push(new Plinko(pl4,500));
  }

  
  
   
}

function draw() {
  background(0);  

  Engine.update(myengine);
  ground.display();

  //creating the particles after every 90th frame
  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
    
  }

   //display the falling particles
   for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }
  //display the vertical divisions
  for(var i = 0; i < divisions.length ; i++){
    divisions[i].display();
  }
  
  //display the horizontal rows of plinkos
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  
  
}