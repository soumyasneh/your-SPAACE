
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hello;
var msg, msgimg;
var hero, grlmg, grlflymg;
var gradent;
var alien, alienimg;
var oleGroup;
var alienGroup;
var lavarainGroup;
var congrats, conmg;
var letter, lettimg;
var iknew, iknimg;


var score=0;
 //aliengroup = new Group();


function preload()
{
//wonimg = loadImage("WEWON.png");
conmg = loadImage("CONG.png");
lettimg = loadImage("Untitled.png");
iknimg = loadImage("wewonit.png");

msgimg = loadImage("darkrr.png");	
greets = loadImage("meme.png");
grlmg = loadAnimation("download (2).png", "download (3).png");
gradent = loadImage("mm.jpg");
grlflymg = loadAnimation("download (2) - Copy.png");
grlatt = loadAnimation("att.png");
alienimg = loadImage("UFO.png");	
auzar = loadImage("tool.png");
ast = loadImage("ole.png");
}

function setup() {
	createCanvas(1400, displayHeight*10);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	hero = createSprite(500, displayHeight*9.67, 20, 20);
	hero.addAnimation("grll", grlmg);
	hero.addAnimation("boy", grlflymg);
	hero.addAnimation("boyatt", grlatt);
	hero.scale=1;

	hello = createSprite(700,800,200,200);
	hello.addImage(greets);
	hello.velocityY=-10;
	hello.lifetime=150;

	oleGroup = new Group();
	alienGroup = new Group();
	lavarainGroup = new Group();
    //alien = createSprite();

	score = 0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gradent);


fill("white");
textSize(12);
text("PRESS UP ARROW TO GET YOUR HERO", 10,50);
text("OR, PRESS DOWN TO KNOW THE CONDITION OF YOUR CITY", 10,70);
text("PRESS A TO GET YOUR HERO IN ACTION", 10,90);


fill("white");
textSize(15);
text("Instructions:", 10,20);

fill(rgb(0,255,127));
textSize(15);
text("defeated: "+ score, 700,20);

//textSize(40);
//text("WELCOME TO SPACE GAME", 10,40);
//text.velocityX=10;

 // tt.visible = false;
  
  if(keyDown("up")){
	 
	hero.y=hero.y-34;  
	hero.changeAnimation("boy", grlflymg);
	hero.scale=1;
	}

  if(keyDown("down")){
	 
	hero.y=hero.y+34;  
	hero.changeAnimation("boy", grlflymg);
	hero.scale=1;
	}

 if(keyDown("left")){
	 
	hero.x=hero.x-8;  
	//hero.changeAnimation("boy", grlflymg);
	}
 if(keyDown("right")){
	 
	hero.x=hero.x+8;  
	//hero.changeAnimation("boy", grlflymg);
	}
	
		rain();
		makeenemies();
		AAck();

if(oleGroup.isTouching(alienGroup)){
	alienGroup.destroyEach();
	score = score + 1 ;
}
if(alienGroup.isTouching(hero)){
	hero.destroy();
	storm();
	
}

win();

  drawSprites();
  
  	
}

function storm(){
	msg = createSprite(700,300,100,100);	
	msg.addImage(msgimg);
	msg.scale=1.2;
	}

function AAck(){
	if(keyDown("A")) {
		hero.changeAnimation("boyatt",grlatt);
		hero.scale=0.35;
	
		tt = createSprite(hero.x+30, hero.y-30);
	tt.addImage(auzar);
	tt.scale=0.5;
	//tt.debug=true;
	tt.setCollider("rectangle",0,0,400,140,0);
	//tt.visible = true;
	tt.velocityX=15;
	

oleGroup.add(tt);
	}	
}


function makeenemies(){
	if (frameCount%70 === 0){
		alien = createSprite(random(600,1300), random(100,500),100,100);
		alien.addImage(alienimg);
		alien.scale=1.8;
		alien.velocityX = -2;
		//alien.debug=true;
		alien.setCollider("rectangle",0,0,50,30,0);
		alien.lifetime=150;
	
		alienGroup.add(alien);
	}
	
}
function rain(){
	if (frameCount%120 === 0){
		astereo = createSprite(random(0,1300),0 );
		astereo.addImage(ast);
		astereo.velocityY=35;
		astereo.lifetime=150;
		astereo.scale=0.8;	
	
		lavarainGroup.add(astereo);
	}
	
}

function win(){
	if (score===20){	
		alienGroup.destroyEach();

		congrats = createSprite(700,350,100,100);
		congrats.addImage(conmg);

		letter = createSprite(700,450,100,100);
		letter.addImage(lettimg);

		iknew = createSprite(700,200,100,100);
		iknew.addImage(iknimg);

	}
}