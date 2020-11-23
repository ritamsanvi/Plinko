class Pinko {
  constructor(x, y, radius) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.circle(x, y, radius, options); // incorrect
    //this.radius = 10;
    this.radius = radius;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("brown");

    ellipse(pos.x, pos.y, this.radius, this.radius);// incorect
  }
};

