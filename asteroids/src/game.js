const Asteroid = require("./asteroid.js");
const Util = require("./util.js");


function Game () {
  this.DIM_X = 600;
  this.DIM_Y = 400;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition()));
  }
};

Game.prototype.randomPosition = function() {
  return { pos: [Util.getRandomInt(this.DIM_X), Util.getRandomInt(this.DIM_Y) ]};
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(function (asteroid) {
    asteroid.move();
  });
};


module.exports = Game;