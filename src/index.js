import Claw from "./claw.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 450;
const GAME_HEIGHT = 550;

let claw = new Claw(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;

new InputHandler(claw);

function drawClaw(ctx){
  claw.draw(ctx);
}

function drawBarrier(ctx){
  ctx.fillStyle = "#000000"
  ctx.fillRect(125, 250, 5, 300);
  ctx.fillRect(125, 450, 350, 5)
}

function drawAll(ctx){
  drawClaw(ctx);
  drawBarrier(ctx);

}

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  claw.update(deltaTime);
  // claw.draw(ctx);
  drawAll(ctx);


  requestAnimationFrame(gameLoop);
}

gameLoop();
