console.log("hello!")
import Claw from "./claw.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 450;
const GAME_HEIGHT = 550;

let claw = new Claw(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;

new InputHandler(claw);

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  claw.update(deltaTime);
  claw.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
