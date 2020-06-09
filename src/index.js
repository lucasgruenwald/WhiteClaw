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
