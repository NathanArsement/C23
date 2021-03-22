const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new ground(200,390,400,20);
    
     box1 = new box(200,300,50,50);
    box2 = new box(240,100,50,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    box2.display();
    box1.display();
}
