const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Ship, MovingObject);

function Ship (pos, game) {
  this.RADIUS = 10;
  this.COLOR = "purple";
  MovingObject.call(this, {pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game });
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition().pos;
  this.vel = [0, 0];
};

module.exports = Ship;