class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }


  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
  shoot_bananas()
  {
var cannonBA = cannon.angle-28
cannonBA = cannonBA * (3.14/180)
var DaMinions = p5.Vector.fromAngle(cannonBA)
DaMinions.mult(0.5)
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:DaMinions.x*(180/3.14),y:DaMinions.y*(180/3.14)})
  }
}
