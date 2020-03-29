import Barrier from "./barrier.js"
import Can from "./can.js"
import Claw from "./claw.js";
import Control from "./control.js"
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 450;
const GAME_HEIGHT = 550;

// drawings
let barrier = new Barrier();
let claw = new Claw(GAME_WIDTH, GAME_HEIGHT);
let control = new Control();
// images
let can = new Can();

let lastTime = 0;

new InputHandler(claw);

function drawAll(ctx){
  claw.draw(ctx)
  barrier.draw(ctx)
  control.draw(ctx)
  can.draw(ctx)
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
