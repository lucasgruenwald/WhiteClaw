export default class Claw {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 60;
    this.height = 40;

    this.maxSpeed = 3;
    this.speed = 0;
    this.dropSpeed = 0;
    this.retrieving = false;
    this.clawDelta = 0;

    this.position = {
      x: gameWidth - 410,
      y: gameHeight - 530
    };
  }

  

  moveLeft() {
    if (this.dropSpeed === 0){
      this.speed = -this.maxSpeed;
    }
  }

  moveRight() {
    if (this.dropSpeed === 0 && this.retrieving === false){
      this.speed = this.maxSpeed;
    }
    
  }

  moveDown() {
    if (this.dropSpeed === 0){
      this.dropSpeed = this.maxSpeed;
      this.retrieving = true;
      this.openClaw()
    }
  }

  // moveUp() {
  //   this.dropSpeed = -this.maxSpeed
  // }

  stop() {
    this.speed = 0;
    this.dropSpeed = 0;
  }

  draw(ctx){
    ctx.fillStyle = "#5A585C";
    let trolley = ctx.fillRect(this.position.x, this.position.y, this.width, 20);
    let leftClaw = ctx.fillRect(this.position.x - this.clawDelta, this.position.y + 10, 5, this.height + 25);
    let rightClaw = ctx.fillRect(this.position.x + 55 + this.clawDelta, this.position.y + 10, 5, this.height + 25);
  }

  openClaw() {
    this.clawDelta = 3;
  }

  closeClaw(){
    this.clawDelta = -3;
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += this.speed;
    this.position.y += this.dropSpeed;

    // keep claw within frame
    if (this.position.x <= 34) {
      this.position.x = 34;
      this.retrieving = false;
      this.openClaw()
      // add function to open claw & drop can
    };
    
    if (this.position.y <= 20) {
      if (this.dropSpeed !== 0) {
        // stop any upward speed & return can
        this.dropSpeed = 0;
        this.moveLeft()
      }
      // keep claw below bar height
      this.position.y = 20;
    };

    if (this.position.x + this.width > this.gameWidth){
      // keep claw within left/right boundaries
      this.position.x = this.gameWidth - this.width;  
    }

    if (this.position.y + this.height > 300){
      // keep claw from going too far down
      this.dropSpeed = -this.maxSpeed
      this.closeClaw()
    }
      
  }
}
