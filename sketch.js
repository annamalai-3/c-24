const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20);
    bird1 = new Bird(120,200,20,20);
    bird2 = new Bird(140,210,30,30);
    pig1 = new Pig(120,124,30,30);
    pig2 = new Pig(150,39,30,30);
    log1 = new Log(189,30);
    log2 = new Log(130,146);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    bird1.display();
    ground.display();
    bird2.display();
    pig1.display();
    pig2.display();   
    log1.display();
    log2.display();
}