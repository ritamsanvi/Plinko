
var particles = []
var pinkos = []
var divisions = []

var divisionHeight = 300;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world

function setup() {
  createCanvas(800, 605);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 600, 800, 10);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var j = 40; j <= width; j = j + 40) {
    pinkos.push(new Pinko(j, 75,8))
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    pinkos.push(new Pinko(j, 175,8))
  }

}


function draw() {
  //rectMode(CENTER);

  background("black");
  Engine.update(engine);

  ground.display();

  // create Particles after every 60 frames
  if (frameCount % 30 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10))
  }

  // for loop to display particles
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }


  // for loop to display plinkos
  for (var k = 0; k < pinkos.length; k++) {
    pinkos[k].display();
  }

  // for loop to display divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  drawSprites();

}
