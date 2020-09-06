class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      this.body = Matter.Bodies.circle(x, y, 10, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      fill("pink");
      circle(0, 0);
      pop();
    }
  };