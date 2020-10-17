
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 function preload(){

 }

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	

	ground = new  Ground(width/2,670,width,20);
	
	//Create the Bodies Here.
	paper= new Paper(200,450,50)
	dustbin1 = new Dustbin(900,600,100,0)
	dustbin2 = new Dustbin(1100,600,100,0)
	dustbin3 = new Dustbin(900,375,300)
	


	
	
	Engine.run(engine);

}

	
  

	


function draw(){
    background("black");
    Engine.update(engine);
    
text(mouseX+","+mouseY,mouseX,mouseY)


paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  

  ground.display();




}
function keyPressed (){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-115})
}


}


