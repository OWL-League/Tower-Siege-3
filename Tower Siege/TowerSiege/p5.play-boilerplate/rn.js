class rn {
    constructor(x, y, sides, radius) {
      var options = {
          'density':1.0
      }
      this.body = Bodies.polygon(x, y, sides, radius/2, options);
      this.image = loadImage("shisui.png");
      this.sides = sides;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      fill(255);
      image(this.image, pos.x, pos.y, this.sides, this.radius);
      pop();
    }
  };
  