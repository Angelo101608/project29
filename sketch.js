const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2, box3, box4, box5, box6, box7;

var log1, log2, log3, log4, log5;

var pig1, pig2, pig3;

var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Box(200,300,50,50);
    box2 = new Box(920,350,70,70);
    box1 = new Box(700,350,70,70);
    pig1 = new Pig(810,320);
    log1 = new Log(810,260,300,PI/2);
    box3 = new Box(920,240,70,70);
    box4 = new Box(700,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,170,300,PI/2);
    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    bird = new Bird(100,100);

    box7 = new Box(620,350,70,70);
    box6 = new Box(400,350,70,70);
    pig3 = new Pig(520,320);
    log5 = new Log(520,250,300,PI/2);
    ground = new Ground(600,height,1200,20);
    slingShot = new Slingshot(bird.body,{x:100,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    box6.display();
    box7.display();
    pig3.display();
    log5.display();
    ground.display();
    slingShot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    
    function mouseReleased () {
        slingShot.fly ()
    }
    