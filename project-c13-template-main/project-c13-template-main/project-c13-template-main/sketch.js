var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg, redImg, orangeImg;
var apple, orange, red
var background



function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

// Cria as configurações fixas, não mudam após o inicio.
function setup() {

  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  }


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
 
  createRandomElemments();

  drawSprites();
}

function spawnApple() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.lifetime = 150;
  apple.scale = 0.07
}

function spawnOrange() {
  orange = createSprite(random(50, 350), 40, 10, 10);
  orange.scale = 0.08;
  orange.velocityY = 3;
  orange.lifetime = 150;
  orange.scale = 0.08;
}

function spawnRed() {
  red = createSprite(random(50, 350), 40, 10, 10);
  red.addImage(redImg);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.08;
}

function createRandomElemments() {

  var select_sprites = Math.round(random(1, 3));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      spawnApple();
    } else if (select_sprites == 2) {
      spawnOrange();
    } else {
      spawnRed();
    }
  }
}
