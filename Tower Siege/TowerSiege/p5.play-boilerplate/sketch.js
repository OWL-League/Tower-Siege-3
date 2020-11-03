const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var stand1;
var polygon, slingshot;

var gameState = "onSling";
var score = 0;

function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;

  stand1 = new ground(390, 260, 240, 10);

  block1 = new box(330, 235, 30, 40);
  block2 = new box(360, 235, 30, 40);   
  block3 = new box(390, 235, 30, 40);
  block4 = new box(420, 235, 30, 40);
  block5 = new box(450, 235, 30, 40);
  block6 = new box(360, 195, 30, 40);
  block7 = new box(390, 195, 30, 40);
  block8 = new box(420, 195, 30, 40);
  block9 = new box(390, 155, 30, 40);

  polygon = new rn(50, 200, 40, 40);
  slingshot = new Slingshot(polygon.body, {x:100, y:200});
}

function draw() {
  background("black"); 
  Engine.update(engine);

  text("SCORE: "+score, 750, 40)

  stand1.display();
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("green")
  block6.display();
  block7.display();
  block8.display();
  fill("pink")
  block9.display();

  polygon.display();

  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

} 

function mouseDragged(){
  if(gameState !== "launched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched"
}

function keyPressed(){
  if(keyCode === 32 && gameState === "launched"){
      polygon.trajectory=[];
      Matter.Body.setPosition(polygon.body,{x:200, y:50});
     slingshot.attach(polygon.body);
     gameState = "onsling"
     fill("blue");
     if(block1.visibility !== true){
      block1 = new box(330, 235, 30, 40);
      block1.display();
     }
     if(block2.visibility !== true){
      block2 = new box(360, 235, 30, 40);
      block2.display();
     }
     if(block3.visibility !== true){
      block3 = new box(390, 235, 30, 40);
      block3.display();
     }
     if(block4.visibility !== true){
      block4 = new box(420, 235, 30, 40);
      block4.display();
     }
     if(block5.visibility !== true){
      block5 = new box(450, 235, 30, 40);
      block5.display();
     }
     if(block6.visibility !== true){
      block6 = new box(360, 195, 30, 40);
      block6.display();
     }
     if(block7.visibility !== true){
      block7 = new box(390, 195, 30, 40);
      block7.display();
     }
     if(block8.visibility !== true){
      block8 = new box(420, 195, 30, 40);
      block8.display();
     }
     if(block9.visibility !== true){
      block9 = new box(390, 155, 30, 40);
      block9.display();
     }
  }
}
