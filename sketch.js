var garden, rabbit, edges;
let apple, apple_img;
let orange_leaf;
var gardenImg, rabbitImg;
let leaf, leaf_img, grass_img;
let invisibleBoundry1, invisibleBoundry2;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img = loadImage("apple.png");
  leaf_img = loadImage("leaf.png");
  grass_img = loadImage("grass.png");
  orange_leaf = loadImage("orangeLeaf.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage("ground", gardenImg);


  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  let grass = createSprite(300, 350, 50, 50)
  grass.addImage(grass_img);
  grass.scale = 0.2;

}


function draw() {
  background("white");

  rabbit.x = mouseX;
  edges = createEdgeSprites();
  rabbit.collide(edges);
    createApples();
    createLeaves();
  
 
  drawSprites();
}
function createApples() {
  if (frameCount % 80 === 0) {
    apple = createSprite(random(50, 350), 0, 10, 10);
    apple.addImage(apple_img);

    apple.scale = 0.05;
    apple.velocityY = 2.5;

    apple.lifetime = 205;
  }

}
function createLeaves() {
  if (frameCount % 80 === 0) {
    leaf = createSprite(random(50, 350), 40, 10, 10);
    leaf.addImage(orange_leaf, leaf_img);
    leaf.lifetime=205;
    leaf.scale = 0.05;
    leaf.velocityY = 2;
  }

}