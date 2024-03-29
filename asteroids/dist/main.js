/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid (pos, game) {\n  this.COLOR = \"lightgrey\";\n  this.RADIUS = 15;\n  this.RANDOMVECTOR = Util.randomVec(Math.random()*4);\n  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});\n}\n\nAsteroid.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nUtil.inherits(Ship, MovingObject);\n\nfunction Bullet(pos, vel, game) {\n  this.COLOR = \"limegreen\";\n  this.RADIUS = 2;\n  [x, y] = vel\n  let new_vel = [x*5, y*5]\n  MovingObject.call(this, { pos: pos, vel: new_vel, color: this.COLOR, radius: this.RADIUS, game: game });\n}\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\n\nfunction Game () {\n  this.DIM_X = 600;\n  this.DIM_Y = 400;\n  this.NUM_ASTEROIDS = 5;\n  this.asteroids = [];\n  this.addAsteroids();\n  this.bullets = [];\n  this.ship = new Ship(this.randomPosition(), this);\n}\n\nGame.prototype.addAsteroids = function() {\n  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid(this.randomPosition(), this));\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  return { pos: [Util.getRandomInt(this.DIM_X), Util.getRandomInt(this.DIM_Y) ]};\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  this.allObjects().forEach(function(obj) {\n    obj.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function () {\n  this.allObjects().forEach(function(obj) {\n    obj.move(ctx);\n  });\n};\n\nGame.prototype.wrap = function(pos) {\n  let MARGIN = 50;\n  let x = pos[0];\n  let y = pos[1];\n  if (x>this.DIM_X+MARGIN) {\n    x = (x - this.DIM_X - MARGIN);\n  }\n  if (x < 0 - MARGIN) {\n    x = (x + this.DIM_X + MARGIN);\n  }\n  if (y>this.DIM_Y+MARGIN) {\n    y = (y - this.DIM_Y - MARGIN);\n  }\n  if (y < 0 - MARGIN) {\n    y = (y + this.DIM_Y + MARGIN);\n  }\n  return [x, y];\n};\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.allObjects().length-1; i++) {\n    for (let j = i+1; j < this.allObjects().length; j++) {\n      if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\n        this.allObjects()[i].collideWith(this.allObjects()[j]);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(obj) {\n  // if (obj instanceof Asteroid)\n  this.asteroids = this.asteroids.filter( function (el) {\n    return el !== obj;\n  });\n  this.bullets = this.bullets.filter ( function (el) {\n    return el !== obj;\n  });\n};\n\nGame.prototype.allObjects = function() {\n  let objects = [this.ship];\n  return this.asteroids.concat(objects);\n};\n\nGame.prototype.add = function(obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.push(obj);\n  } else if (obj instanceof Bullet) {\n    this.bullets.push(obj);\n  }\n};\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  that.bindKeyHandlers();\n  setInterval(function() {\n  that.game.step();\n  that.game.draw(that.ctx);\n  }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  key('up', () => {this.game.ship.power([0, -1]);});\n  key('down', () => {this.game.ship.power([0, 1]);});\n  key('left', () => {this.game.ship.power([-1, 0]);});\n  key('right', () => {this.game.ship.power([1, 0]);});\n  // key('b', () => { this.game.ship.vel = [0, 0]; });\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nconsole.log(\"Webpack is working!\");\n\nwindow.addEventListener('DOMContentLoaded', function(){\n  let canvas = document.getElementById('game-canvas');\n  let ctx = canvas.getContext('2d');\n  let game_view = new GameView(ctx);\n  game_view.start();\n  //------testing----------\n  window.ctx = ctx;\n  window.game_view = game_view;\n});\n\n//-------------testing-------------\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);\n  ctx.strokeStyle = this.color;\n  ctx.lineWidth = 1;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  if (Util.getDistance(this.pos, otherObject.pos) < (this.radius+otherObject.radius)) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nMovingObject.prototype.collideWith = function (otherObject) {\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nUtil.inherits(Ship, MovingObject);\n\nfunction Ship (pos, game) {\n  this.RADIUS = 10;\n  this.COLOR = \"purple\";\n  this.SPEED = 5;\n  MovingObject.call(this, {pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game });\n}\n\nShip.prototype.relocate = function() {\n  this.vel = [0, 0];\n  this.pos = this.game.randomPosition().pos;\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += (impulse[0]*this.SPEED);\n  this.vel[1] += (impulse[1]*this.SPEED);\n};\n\nShip.prototype.fireBullet = function () {\n  let bullet = new Bullet(this.pos, this.vel, this.game);\n  this.game.bullets.push(bullet);\n};\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate(){}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  getRandomInt(max) {\n    return Math.floor(Math.random() * Math.floor(max));\n  },\n  \n  getDistance(pos1, pos2) {\n    let x = pos1[0] - pos2[0];\n    let y = pos1[1] - pos2[1];\n    return Math.sqrt(x*x + y*y);\n  }\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });