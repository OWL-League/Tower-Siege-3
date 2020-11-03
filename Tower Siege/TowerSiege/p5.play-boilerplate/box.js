class box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    } 

      score(){
        if(this.visibility<0 && this.visibility >-105){
          score++;
        }
      }
        
    display(){
      if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        push();
        tint(255,126);
        World.remove(world, this.body);
        pop();
        
      }


    }
  };