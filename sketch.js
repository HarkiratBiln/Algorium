var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "green";
  fixedrect.velocityX = -2;

  movingrect = createSprite(200,200,50,80);
  movingrect.shapeColor = "green";
  movingrect.velocityX = 2;
}

function draw() {
  background(255,255,255);
  

if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
  && movingrect.y - fixedrect.y < movingrect.width/2 + fixedrect.width/2
  && fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2) {

    fixedrect.velocityX = fixedrect.velocityX *(-1);
    fixedrect.velocityY = fixedrect.velocityY *(-1); 
    movingrect.velocityX = movingrect.velocityX *(-1);
    movingrect.velocityY = movingrect.velocityY *(-1);   
}



  drawSprites();
}