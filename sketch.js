const Engine = Matter.Engine;
 const World = Matter.World;
 const  Events = Matter.Events;
  Bodies = Matter.Bodies;
  var boy;
var maxdrops = 100;
 var drops = [];
 var thunderCreatedFrame=0;
 var thunder;
function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4= loadImage("4.png");
    
}

function setup(){
   createCanvas(400,800)
   engine = Engine.create();
   world = engine.world;
boy = new umbrella(200,600);
if(frameCount%150===0){
for(var i = 0; i<maxdrops;i++){
    drops.push(new Drop(random(0,400),random(0,400)));
}
}
}

function draw(){
    background("black")
   Engine.update(engine) 
   boy.display();
   for(var i = 0; i<maxdrops;i++){
   drops[i].display();
   drops[i].Position();
   }
   rand = Math.round(random(1,4))
   if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
         thunder = createSprite(random(10,370), random(10,30), 10, 10);
          switch(rand){
               case 1: thunder.addImage(thunder1);
                break;
                 case 2: thunder.addImage(thunder2);
                  break;
                   case 3: thunder.addImage(thunder3);
                    break; 
                    case 4: thunder.addImage(thunder4);
                     break; 
                     default: break;
                     } 
                     thunder.scale = random(0.3,0.6)
                     }
                     if(thunderCreatedFrame + 10 ===frameCount && thunder){
                        thunder.destroy(); 
                    } 
                        drawSprites(); 
}   

