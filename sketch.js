var background,bacgroundIMG;
var boy,boyIMG;
var mother,motherIMG;
var utensil1,utensil2,utensil3,utensil4,utensil5,utensil1IMG,utensil2IMG,utensil3IMG,utensil4IMG,utensil5IMG;

function preload(){
backgroundImg=loadImage("interior.jpg");
boyIMG=loadImage("boyimage.png");
motherIMG=loadImage("mother.png");
utensil1IMG=loadImage("utensil1.jpg");
utensil2IMG=loadImage("utensil2.png");
utensil3IMG=loadImage("utensil3.png");
utensil4IMG=loadImage("utensil4.png");
utensil5IMG=loadImage("utensil5.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight - 300);
  background=createSprite(displayWidth/2,displayHeight/2,width,height);
  background.addImage(backgroundImg);
  background.scale=(3.0);
  boy=createSprite(displayWidth/2,displayHeight-500);
  boy.addImage(boyIMG);
  mother=createSprite(200,displayHeight-450);
  mother.addImage(motherIMG);
  mother.scale=(1.2);

  
}

function draw() {
  if(keyDown("space")) {
    spawnutensils();
  }
  drawSprites();
}
function spawnutensils(){
  utensil=createSprite(200,displayHeight-450);
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: utensil.addImage(utensil1IMG);
              break;
      case 2: utensil.addImage(utensil2IMG);
              break;
      case 3: utensil.addImage(utensil3IMG);
              break;
      case 4: utensil.addImage(utensil4IMG);
              break;
      case 5: utensil.addImage(utensil5IMG);
              break;
      default: break;
    }
}