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
  ctx.fillStyle = "#AEA8B6"
  ctx.fillRect(0, 25, 450, 5)
  claw.draw(ctx);
  
}

function drawBarrier(ctx){
  ctx.fillStyle = "black"
  ctx.fillRect(125, 390, 350, 60)
  ctx.fillStyle = "#757373"
  ctx.fillRect(125, 220, 5, 300);
  ctx.fillRect(125, 450, 350, 100);
  ctx.fillRect(0, 400, 130, 150);
  ctx.fillStyle = "#474747"
  ctx.fillRect(20, 450, 90, 90)
}

function drawControls(ctx){
  ctx.fillStyle = "white"
  ctx.beginPath();
  ctx.moveTo(190, 420);
  ctx.lineTo(230, 400);
  ctx.lineTo(230, 440);
  ctx.fill();
  ctx.fillStyle = "green"
  ctx.fillRect(250, 400, 70, 40)
  ctx.fillStyle = "white"
  ctx.beginPath();
  ctx.moveTo(380, 420);
  ctx.lineTo(340, 400);
  ctx.lineTo(340, 440);
  ctx.fill();
}


function drawAll(ctx){
  drawClaw(ctx);
  drawBarrier(ctx);
  drawControls(ctx);
}

//images 
let can = document.getElementById("img-can")


function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  claw.update(deltaTime);
  drawAll(ctx);
  ctx.drawImage(can, 140, 280, 70, 120);
  ctx.drawImage(can, 230, 280, 70, 120);
  ctx.drawImage(can, 328, 280, 70, 120);

  ctx.save();
  ctx.rotate(1/4);
  ctx.drawImage(can, 452, 165, 70, 120);
  ctx.restore();

  requestAnimationFrame(gameLoop);
}

gameLoop();
