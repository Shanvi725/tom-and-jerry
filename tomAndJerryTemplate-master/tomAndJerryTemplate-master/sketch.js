var bgImg;
var tomImg1, tomImg2, tomImg3;
var jerryImg1, jerryImg2, jerryImg3;


function preload() {

    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870, 600, 10, 10);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600, 10, 10);
    jerry.addAnimation("jerrySleeping",jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
