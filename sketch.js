const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    sand1 = new sand(300,300, 5)
    sand2 = new sand(300,310, 5)
    sand3 = new sand(300,320, 5)
    sand4 = new sand(300,330, 5)
    sand5 = new sand(300,340, 5)
    sand6 = new sand(300,350, 5)

    iron1 = new iron(500,400)

    rubber1 = new Rubber(600,300,50)

    stone1 = new stone(900,200)}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();

    iron1.display();
    rubber1.display();

    stone1.display();


    
 
}