

function preload(){
   aImage = loadImage("2.gif")
   
   oImage = loadImage("o.gif")
   iImage = loadImage("i.gif")
   tImage = loadImage("t.webp")
   backgroundImage = loadImage("background.jpg")
   Sound = loadSound("breaking-ice-02.wav")
}

function setup(){
 createCanvas(1355,600)
 
 

 

 t = createSprite(500,300,20,10)
 t.addImage(tImage)
 t.scale = 2.75;
 t.velocityX =7;

 i = createSprite(1100,350,20,10)
 i.addImage(iImage)

 o = createSprite(1100,300,20,10)
 o.addImage(oImage)
 o.scale = 0.3;
 o.visible = false;

 l = createSprite(1100,300,20,10)
 l.addImage(oImage)
 l.scale = 0.3;
 l.visible = false;

 p = createSprite(1100,300,20,10)
 p.addImage(oImage)
 p.scale = 0.3;
 p.visible = false;

 ground = createSprite(0,100,10,1600)
 ground.visible = false;
}

function draw(){
background(backgroundImage)

i.x = World.mouseX;
i.y = World.mouseY;

t.x = World.touchX;
t.y = World.touchY;

if(keyDown("space")){
   o.visible = true;
   o.velocityX = -56;
}
if(keyDown("enter")){
   l.visible = true;
   l.velocityX = -56;
}
if(keyDown("shift")){
   p.visible = true;
   p.velocityX = -56;
   Sound.play();
}

if(o.isTouching(t)){
   
   o.visible = false;
   
}
if(l.isTouching(t)){
  
   l.visible = false;
   
}

if(p.isTouching(t)){
   t.velocityX = -7;
   p.visible = false;
   
   
   t.visible = true;
   
}


t.collide(ground)



drawSprites();
}
