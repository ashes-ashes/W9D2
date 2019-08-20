const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");


function Game () {
  this.DIM_X = 600;
  this.DIM_Y = 400;
  this.NUM_ASTEROIDS = 5;
  this.asteroids = [];
  this.addAsteroids();
  this.bullets = [];
  this.ship = new Ship(this.randomPosition(), this);
}

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition(), this));
  }
};

Game.prototype.randomPosition = function() {
  return { pos: [Util.getRandomInt(this.DIM_X), Util.getRandomInt(this.DIM_Y) ]};
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.allObjects().forEach(function(obj) {
    obj.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.allObjects().forEach(function(obj) {
    obj.move(ctx);
  });
};

Game.prototype.wrap = function(pos) {
  let MARGIN = 50;
  let x = pos[0];
  let y = pos[1];
  if (x>this.DIM_X+MARGIN) {
    x = (x - this.DIM_X - MARGIN);
  }
  if (x < 0 - MARGIN) {
    x = (x + this.DIM_X + MARGIN);
  }
  if (y>this.DIM_Y+MARGIN) {
    y = (y - this.DIM_Y - MARGIN);
  }
  if (y < 0 - MARGIN) {
    y = (y + this.DIM_Y + MARGIN);
  }
  return [x, y];
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.allObjects().length-1; i++) {
    for (let j = i+1; j < this.allObjects().length; j++) {
      if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
        this.allObjects()[i].collideWith(this.allObjects()[j]);
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(obj) {
  // if (obj instanceof Asteroid)
  this.asteroids = this.asteroids.filter( function (el) {
    return el !== obj;
  });
  this.bullets = this.bullets.filter ( function (el) {
    return el !== obj;
  });
};

Game.prototype.allObjects = function() {
  let objects = [this.ship];
  return this.asteroids.concat(objects);
};

Game.prototype.add = function(obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.push(obj);
  } else if (obj instanceof Bullet) {
    this.bullets.push(obj);
  }
};


module.exports = Game;