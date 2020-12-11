const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1,sling1;

function setup() {
  canvas = createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  roofobject=new Roof(400,200,600,20);

  pendulum1=new Pendulum(200,300,"white")
  pendulum2=new Pendulum(280,300,"white")
  pendulum3=new Pendulum(360,300,"white")
  pendulum4=new Pendulum(440,300,"white")
  pendulum5=new Pendulum(520,300,"white")

  sling1 = new Sling(pendulum1.body, { x: 200, y: 300 });
  sling2 = new Sling(pendulum2.body, { x: 280, y: 300 });
  sling3 = new Sling(pendulum3.body, { x: 360, y: 300 });
  sling4 = new Sling(pendulum4.body, { x: 440, y: 300 });
  sling5 = new Sling(pendulum5.body, { x: 520, y: 300 });

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}