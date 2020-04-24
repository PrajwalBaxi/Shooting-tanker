const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball1;

function setup() {
    var canvas = createCanvas(800,400);
    engine = Engine.create();
   world = engine.world;

        ground = new Ground(400,height,800,40); 
        ball1 = new Ball(400,0,50);
        //ball1.framerate();
        tanker= new Tanker(100,350,200,100);
        tanker1= new Tanker(100,275,100,50);
        tanker2= new Tanker(160,270,20,40);
        cball1 = new CanonBall(150,270,20,20);
        sball = new ShootBall(cball1.body,{x:200, y:50});
        //var flag = "start";
        //var shot;

}

function draw() {
background(200);
text("Hit the ball as many time you can",0,100);
Engine.update(engine);

//if(ball1.framecount%200===0){
//    ball1.pos.y=0;
//}
ground.display();
ball1.display();
tanker.display();
tanker1.display();
tanker2.display();
cball1.display();
sball.display();
}
function keyPressed(){
        if(keyCode === 32){
           // flag="launch";
          //   shot.shoot();
            Matter.Body.setPosition(cball1.body, {x: mouseX , y: mouseY});
        }
    }
