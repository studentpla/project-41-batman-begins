class umbrella{ 
    constructor(x, y)
     { var options ={
         
          isStatic:true
    }
     this.r=150;
     this.body = Bodies.circle(x, y, 150,options);
      this.image = loadImage("walking_1.png");
      World.add(world, this.body); 
    } 
    display() { 
        var pos = this.body.position;
         var angle = this.body.angle; 
         push();
          translate(pos.x, pos.y);
           rotate(angle);
            imageMode(CENTER);
            noStroke(); 
           
    image(this.image,0, 0, this.r*2.5,this.r*2.5);
     pop(); } };