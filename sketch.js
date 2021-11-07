 var path,boy,carrot,salad,egg,burger,noodle,donut,icecream;
var pathImg,boyImg,carrotImg,saladImg,eggImg,burgerImg,donutImg,icecreamImg,noodleImg;
var treasureCollection = 0;
var carrotG,saladG,eggG,swordGroup,donutG,noodleG,icecreamG;
var PLAY=1;
var END=0;
var gamestate=1;
var endImg
var gameOver
var man,manImg
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  carrotImg = loadImage("Carrot.png");
  saladImg = loadImage("Salad..png");
  eggImg = loadImage("Egg..png");
  burgerImg = loadImage("Burger.png");
  noodleImg = loadImage("Noodle.png");
  icecreamImg=loadImage("icecream1.png")
  //endImg =loadAnimation("gameOver.png");
endImg=loadAnimation('1.png','2.png','3.png','4.png','5.png','6.png')
donutImg= loadImage("Donut..png")
  
}

function setup(){
  
  createCanvas(displayWidth,displayHeight);
// Moving background
path=createSprite(displayWidth/2,displayHeight/2);
path.addImage(pathImg);
path.velocityY = 4;

//man=createSprite(displayWidth/2,displayHeight/2)
//man.addAnimation("Over",manImg)

//creating boy running
boy = createSprite(width/2,height/2,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
  
carrotG=new Group();
noodleG=new Group()
saladG=new Group();
eggG=new Group();
burgerGroup=new Group();
donutG=new Group()
icecreamG=new Group()

}

function draw() {
if (gamestate === PLAY) {
  

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ) {
    path.y = height/2;
  }
  
    createCarrot();
    createSalad();
    createEgg();
    createBurger();
    createNoodle();
    createDonut();
    createIcecream();
  

    if (carrotG.isTouching(boy)) {
      carrotG.destroyEach();
      treasureCollection = treasureCollection+50;
    }
    else if (saladG.isTouching(boy)) {
      saladG.destroyEach();
       treasureCollection = treasureCollection+150;

    }else if(eggG.isTouching(boy)) {
      eggG.destroyEach();
     treasureCollection = treasureCollection+100; 
    }
   else if(noodleG.isTouching(boy)) {
    noodleG.destroyEach();
   treasureCollection = treasureCollection+100; 
   }

   else if(donutG.isTouching(boy)) {
  donutG.destroyEach();
   treasureCollection = treasureCollection+100; 
   }

   else if(donutG.isTouching(boy)) {
    donutG.destroyEach();
     treasureCollection = treasureCollection+100; 
     }

     else if(icecreamG.isTouching(boy)) {
      icecreamG.destroyEach();
       treasureCollection = treasureCollection+100; 
       }
    
    
  

  else {
  if(burgerGroup.isTouching(boy)||noodleG.isTouching(boy) ||donutG.isTouching(boy)||icecreamG.isTouching(boy)){
    gamestate=END
    boy.addAnimation("SahilRunning",endImg);
    boy.x=width/2
    boy.y=height/2
    boy.scale=0.6
    carrotG.destroyEach();
     carrotG.setVelocityYEach(0);
    saladG.destroyEach();
     saladG.setVelocityYEach(0);
     eggG.destroyEach();
     eggG.setVelocityYEach(0);
     burgerGroup.destroyEach();
     burgerGroup.setVelocityYEach(0);
     noodleG.destroyEach()
     noodleG.setVelocityYEach(0);
     icecreamG.destroyEach()
     icecreamG.setVelocityYEach(0);
     donutG.destroyEach()
     donutG.setVelocityYEach(0);
  }
  }
  drawSprites();
  textSize(20);
  fill(255);
  text("Health level: "+ treasureCollection,150,30);

}
}
function createCarrot() {
  if (World.frameCount % 50 == 0) {
  var carrot = createSprite(Math.round(random(50, width-50),40, 10, 10));
  carrot.addImage(carrotImg);
  carrot.scale=0.3;
  carrot.velocityY = 3;
  carrot.lifetime = 150;
  carrotG.add(carrot);
  }
}

function createSalad() {
  if (World.frameCount % 80 == 0) {
  var salad = createSprite(Math.round(random(50, width-50),40, 10, 10));
  salad.addImage(saladImg);
  salad.scale=0.3;
  salad.velocityY = 3;
  salad.lifetime = 150;
  saladG.add(salad);
}
}

function createEgg() {
  if (World.frameCount % 80 == 0) {
  var egg = createSprite(Math.round(random(50, width-50),40, 10, 10));
  egg.addImage(eggImg);
  egg.scale=0.13;
  egg.velocityY = 3;
  egg.lifetime = 150;
  eggG.add(egg);
  }
}

function createNoodle() {
  if (World.frameCount % 80 == 0) {
  var noodle = createSprite(Math.round(random(50, width-50),40, 10, 10));
  noodle.addImage( noodleImg);
  noodle.scale=0.5;
  noodle.velocityY = 3;
  noodle.lifetime = 150;
  noodleG.add( noodle);
  }}

  function createIcecream() {
    if (World.frameCount % 80 == 0) {
    var icecream = createSprite(Math.round(random(50, width-50),40, 10, 10));
    icecream.addImage( icecreamImg);
    icecream.scale=0.2;
    icecream.velocityY = 3;
    icecream.lifetime = 150;
    icecreamG.add( icecream);
    }}
  function createDonut() {  
    if (World.frameCount % 80 == 0) {
    var donut = createSprite(Math.round(random(50, width-50),40, 10, 10));
    donut.addImage( donutImg);
    donut.scale=0.3;
    donut.velocityY = 3;
    donut.lifetime = 150;
    donutG.add( donut);
    }}

function createBurger(){
  if (World.frameCount % 150 == 0) {
  var burger = createSprite(Math.round(random(50, width-50),40, 10, 10));
  burger.addImage(burgerImg);
  burger.scale=0.3;
  burger.velocityY = 3;
  burger.lifetime = 150;
  burgerGroup.add(burger);
  }
}
