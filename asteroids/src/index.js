const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

console.log("Webpack is working!");

window.addEventListener('DOMContentLoaded', function(){
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  let game_view = new GameView(ctx);
  game_view.start();
  //------testing----------
  window.ctx = ctx;
  window.game_view = game_view;
});

//-------------testing-------------
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
