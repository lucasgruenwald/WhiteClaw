import Claw from "./claw.js";
import Barrier from "./barrier.js"
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 450;
const GAME_HEIGHT = 550;

let claw = new Claw(GAME_WIDTH, GAME_HEIGHT);
let barrier = new Barrier();
let lastTime = 0;

new InputHandler(claw);


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
  claw.draw(ctx)
  barrier.draw(ctx)
 
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
