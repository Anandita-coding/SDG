var bg,bgi,squirrel,squirrel_animation,rock1,rock1Img,rock2Img,rock3Img,rock4Img,ig;

function preload(){
  bgi = loadImage("track.jpg")
  squirrel_animation = loadAnimation("W1-removebg-preview.png","W2-removebg-preview.png","W3-removebg-preview.png","W4-removebg-preview.png")
  
  rock1Img = loadImage("r1-removebg-preview.png")
  rock2Img =loadImage("r2-removebg-preview.png")
  rock3Img = loadImage("r3-removebg-preview.png")
}

function setup(){
  createCanvas(600,500)
  bg = createSprite(300,200)
  bg.addImage(bgi)
  bg.velocityX = -3
  bg.scale = 2
  ig = createSprite(250,485,600,5)
  ig.visible = false;
  ig.collide(ig);
  
  squirrel = createSprite(50,380)
  squirrel.addAnimation("squirrel",squirrel_animation)
  squirrel.scale = 0.5
  
}

function draw(){
  background("white")
  
  
  if(bg.x < 200){
    bg.x = width/2
  }

  if(keyDown("space")&& squirrel.y >= 100) {
    squirrel.velocityY = -12;
    
}

//add gravity
squirrel.velocityY = squirrel.velocityY + 0.8

  if(frameCount % 120 === 0){
    rock = createSprite(400,400)
    rock.velocityX = -3
    
    switch(random(1,3)){
      case 1:rock.addImage(rock1Img)
        break;
      case 2:rock.addImage(rock2Img)
        break;
      case 3:  rock.addImage(rock3Img)
    break;
           }
    
  }
  rocks();
  drawSprites();
}

function rocks(){
  
  
  
}






