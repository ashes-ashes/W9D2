const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Ship, MovingObject);

function Bullet(pos, vel, game) {
  this.COLOR = "limegreen";
  this.RADIUS = 2;
  [x, y] = vel
  let new_vel = [x*5, y*5]
  MovingObject.call(this, { pos: pos, vel: new_vel, color: this.COLOR, radius: this.RADIUS, game: game });
}

module.exports = Bullet;
