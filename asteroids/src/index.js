const MovingObject = require("./moving_object.js");
console.log("Webpack is working!");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function(){
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
});