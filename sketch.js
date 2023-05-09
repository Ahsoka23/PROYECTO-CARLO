var canvas;
var backgroundImage;
var titulo
var botonplay
var score
var hola
var tabla
var gameState = "PLAY"

function preload() {
  backgroundImage = loadImage("sciencebg.png");
  tablaimg = loadImage("tabla.jpg");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  fondo = createSprite(width/2,height/2,width,height);

  fondo.addImage(backgroundImage)
  fondo.scale=8
 titulo = createSprite(800,300,50,50);

 botonplay = createSprite(800,400,50,50)


 tabla = createSprite (width/2,height/2,100,100)
 tabla.addImage(tablaimg);
 tabla.scale = 0.1;
 tabla.visible = false;



 
 
  
  
 
  

  
 

  score = 0;
  
}

function draw() {
  
  //image (backgroundImage,0,0,windowWidth,windowHeight)
  background("blue");
  text("Puntuación: "+ score, 1300,80);
 
    
    
  if(mousePressedOver(botonplay)) {
   botonplay.visible = false;
   titulo.visible = false;
   tabla.visible = true;
   tabla.scale=0.9
   console.log(1)
  }

 
 //  else if (gameState === END) {
    
   //}
     
    drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

