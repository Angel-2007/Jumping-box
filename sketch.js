var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;



function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "red";

    block3 = createSprite(500, 580, 200, 30);
    block3.shapeColor = "yellow";

    block4 = createSprite(790, 580, 360, 30);
    block4.shapeColor = "green";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
  
    
   
   ball.bounceOff(block1);


    if(block2.isTouching(ball)){
        ball.shapeColor = "red";
        ball.velocityX = 0;
        ball.velocityY = 0;
      
    }

   
ball.bounceOff(block3);
ball.bounceOff(block4);

drawSprites();
}
