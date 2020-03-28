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
  ctx.fillStyle = "black"
  ctx.fillRect(125, 350, 350, 100)
  ctx.fillStyle = "#757373"
  ctx.fillRect(125, 190, 5, 300);
  ctx.fillRect(125, 450, 350, 100);
  ctx.fillRect(0, 400, 130, 150);
  ctx.fillStyle = "#474747"
  ctx.fillRect(20, 450, 90, 90)
}

function drawControls(ctx){
  ctx.fillStyle = "white"
  ctx.beginPath();
  ctx.moveTo(190, 400);
  ctx.lineTo(230, 380);
  ctx.lineTo(230, 420);
  ctx.fill();
  ctx.fillStyle = "green"
  ctx.fillRect(250, 380, 70, 40)
  ctx.fillStyle = "white"
  ctx.beginPath();
  ctx.moveTo(380, 400);
  ctx.lineTo(340, 380);
  ctx.lineTo(340, 420);
  ctx.fill();
}

function drawAll(ctx){
  drawClaw(ctx);
  drawBarrier(ctx);
  drawControls(ctx);
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
