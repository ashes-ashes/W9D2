const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

console.log("Webpack is working!");

window.addEventListener('DOMContentLoaded', function(){
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  window.ctx = ctx;
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;