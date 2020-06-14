import Barrier from "./barrier.js"
import Can from "./can.js"
import Claw from "./claw.js";
import Control from "./control.js"
import InputHandler from "./input.js";
// import Score from "./score.js"

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
// let dpi = window.devicePixelRatio;

let GAME_WIDTH = 450;
let GAME_HEIGHT = 550;

// drawings
let barrier = new Barrier();
let claw = new Claw(GAME_WIDTH, GAME_HEIGHT);
let control = new Control();
// images
let can = new Can(GAME_WIDTH, GAME_HEIGHT, claw);
// let score = new Score(GAME_WIDTH, GAME_HEIGHT, claw);

// function fix_dpi() {
//   let style_height = +getComputedStyle(canvas).getPropertyValue(GAME_HEIGHT).slice(0, -2);
//   let style_width = +getComputedStyle(canvas).getPropertyValue(GAME_WIDTH).slice(0, -2);
//   canvas.setAttribute("height", style_height * dpi);
//   canvas.setAttribute("width", style_width * dpi);
// }


function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function isInside(pos, rect) {
  return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

var rect = {
  x: 250,
  y: 400,
  width: 70,
  height: 40
};
var left = {
  x: 190,
  y: 400,
  width: 40,
  height: 40
}
var right = {
  x: 340,
  y: 400,
  width: 40,
  height: 40
}
var reset = {
  x: 524,
  y: 522,
  width: 125,
  height: 40
}

canvas.addEventListener('mousedown', function (event) {
  var mousePos = getMousePos(canvas, event);
  if (isInside(mousePos, rect)) {
    claw.moveDown();
  } else if (isInside(mousePos, left)){
    claw.moveLeft()
  } else if (isInside(mousePos, right)){
    claw.moveRight()
  } else if (isInside(mousePos, reset)){
    claw.maxSpeed = 3;
    claw.speed = 0;
    claw.dropSpeed = 0;
    claw.retrieving = false;
    claw.successful = false;
    claw.clawBottom = false;
    claw.clawDelta = 0;
    claw.removeCan1 = false;
    claw.removeCan2 = false;
    claw.removeCan3 = false;
    claw.foundCans = [];
    claw.level = 1;
    claw.levelComplete = false
    claw.score = 0;
    claw.gameWidth = gameWidth;
    claw.gameHeight = gameHeight
    claw.position = {
      x: gameWidth - 410,
      y: gameHeight - 530
    };
  }
}, false);

canvas.addEventListener('mouseup', function (event) {
  if (claw.speed !== 0) {
    claw.stop()
  }
}, false);


let lastTime = 0;

new InputHandler(claw);

function drawAll(ctx){
  // fix_dpi()
  can.draw(ctx)
  claw.draw(ctx)
  barrier.draw(ctx)
  control.draw(ctx)
  // score.draw(ctx)
}


function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  claw.update(deltaTime);
  drawAll(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
