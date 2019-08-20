

Util.inherits(Asteroid, MovingObject);

function Asteroid (pos) {
  this.COLOR = "lightgrey";
  this.RADIUS = 15;
  this.RANDOMVECTOR = Util.randomVec(Math.random(10));
  MovingObject.call(this,{pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS});
}

module.exports = Asteroid;