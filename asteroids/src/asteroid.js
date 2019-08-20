const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Asteroid, MovingObject);

function Asteroid (pos) {
  this.COLOR = "lightgrey";
  this.RADIUS = 15;
  this.RANDOMVECTOR = Util.randomVec(Math.random()*4);
  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS});
}

module.exports = Asteroid;