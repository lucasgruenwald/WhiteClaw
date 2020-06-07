export default class InputHandler {
  constructor(claw) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          claw.moveLeft();
          break;

        case 39:
          claw.moveRight();
          break;

        case 32:
          claw.moveDown();
          break;
        case 38:
          claw.moveUp();
          break;
        
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (claw.speed < 0) claw.stop();
          break;

        case 39:
          if (claw.speed > 0) claw.stop();
          break;
      }
    });
  }
}
