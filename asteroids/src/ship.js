const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet.js");

Util.inherits(Ship, MovingObject);

function Ship (pos, game) {
  this.RADIUS = 10;
  this.COLOR = "purple";
  this.SPEED = 5;
  MovingObject.call(this, {pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game });
}

Ship.prototype.relocate = function() {
  this.vel = [0, 0];
  this.pos = this.game.randomPosition().pos;
};

Ship.prototype.power = function(impulse) {
  this.vel[0] += (impulse[0]*this.SPEED);
  this.vel[1] += (impulse[1]*this.SPEED);
};

Ship.prototype.fireBullet = function () {
  let bullet = new Bullet(this.pos, this.vel, this.game);
  this.game.bullets.push(bullet);
};

module.exports = Ship;