//constants
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Engine = Matter.Engine;

//variables
var engine, world;

var drops=[];
var maxDrops = 100; 
var walkframeAni, walking;
var thunderSprite, thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var rand;
var thunderFrame;





function preload(){
    walkframeAni = loadImage("Walking Frame/walking_1.png")

    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");
    thunderAudio = loadSound("thunderAudio.wav");
}

function setup(){
   createCanvas (1000,1000);
   
   engine = Engine.create();
   world = engine.world;
  
   for(var i = 0; i<=maxDrops; i++) {
       drops.push(new Rain(random(0,1000), random(0,1000)));
   }

   walking = Bodies.circle(487, 870, 65*2, {isStatic:true, friction: 0.1});
   World.add(world, walking);
   thunderAudio.play();
   thunderAudio.setLoop(true);
    
}

function draw(){
    Engine.update(engine);
    background(0);

    
        for(var a = 0; a < 100; a++) {
        drops[a].display();
        drops[a].updateDrops()

        }
    //console.log(Math.round(random(1,4)))
    imageMode(CENTER);    
    image(walkframeAni, walking.position.x, walking.position.y, 65*4+50, 65*4+50);
    
    
    rand = Math.round(random(1,4))
    //1 sec = 30 frames
    if(frameCount % 30 === 0) {
        thunderFrame = frameCount;
        console.log(thunderFrame);
    thunderSprite = createSprite(Math.round(random(0,1000)), 50)
    if(thunderFrame >= 300) {
        thunderSprite.destroy();
    }
    else{
        switch(rand) {
            case 1: thunderSprite.addImage("thunderImg1",thunderImg2)
                break;
            case 2: thunderSprite.addImage("thunderImg2",thunderImg2)
                break;
            case 3: thunderSprite.addImage("thunderImg3",thunderImg3)
                break;
            case 4: thunderSprite.addImage("thunderImg4",thunderImg4)
                break;
            default: break;
            
        }
        thunderSprite.lifetime = 30;
        thunderSprite.scale = random(0.3, 0.6);
        
    }
        
    }
   
    drawSprites();
    
}   


