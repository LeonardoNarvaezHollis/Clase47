//Las variables (fondo, obstaculos,player, monedas (vida)
var road1;
var road2;
var ambulance;
var truck, greenTruck;
var policeCar;
var carB, carGreen, carGray, carR, carY
var bg;
var coin;
var player;
var obstaclesGroup;

function preload() {
//Cargar las imagenes  
  road1 = loadImage("./Image/carretera1.jpg");
  road2 = loadImage("./Image/carretera2.jpg");
  ambulance = loadImage("./Image/ambulance.png");
  truck = loadImage("./Image/truck.png");
  coin = loadImage("./Image/coin.png");
  carB = loadImage("./Image/carBlue.png");
  carGreen = loadImage("./Image/carGreen.png");
  carGray = loadImage("./Image/carGrey.png");
  carR = loadImage("./Image/carRed.png");
  carY = loadImage("./Image/yellowCar.png");
  greenTruck = loadImage("./image/greenTruck.png");
}


function setup() {
  createCanvas(600,300);
  
  bg = createSprite(300, 700);
  bg.addImage("bg", road1);
  bg.velocityY = 2.5;

  //Carro del player
  player = createSprite(400,160,100,150);
  player.addImage("jugador",carGray);
  player.scale = 0.3

  //Crear el grupo de obstaculos
  obstaclesGroup = new Group();

  
 
}

function draw() {
  background(255,255,255);
 // console.log(bg.y); 
  if(bg.y > 225){
    bg.y = 75.5;
  }
  
  if (keyDown("LEFT_ARROW")){
    player.x = player.x -3;
    
  }
  
  if (keyDown("RIGHT_ARROW")){
    player.x += 3;
    
  }
  
  if (keyDown("DOWN_ARROW")){
    player.y = player.y +3;
    
  }
  console.log(player.x);
  spawnObstacles();
  drawSprites();
}
//switch/grupos para los obstaculos (el juego del Trex clase #18)

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(300,160,10,40);
    //obstacle.velocityX = -(6 + score/100);
    obstacle.velocityY += 3;

     //generar obstáculos al azar
     var rand = Math.round(random(1,8));
     switch(rand) {
       case 1: obstacle.addImage(ambulance);
               break;
       case 2: obstacle.addImage(carB);
               break;
       case 3: obstacle.addImage(carGreen);
               break;
       case 4: obstacle.addImage(carR);
               break;
       case 5: obstacle.addImage(greenTruck);
               break;
       case 6: obstacle.addImage(policeCar);
               break;
       case 7: obstacle.addImage(truck);
               break;
       case 8: obstacle.addImage(carY);
               break;
       default: break;
     }
    
     //asignar escala y ciclo de vida al obstáculo           
     obstacle.scale = 0.3;
     obstacle.lifetime = 300;
    
    //agregar cada obstáculo al grupo
     obstaclesGroup.add(obstacle);
  }
 }
 


