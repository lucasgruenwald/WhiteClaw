export default class Claw {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 60;
    this.height = 40;

    this.maxSpeed = 3;
    this.speed = 0;
    this.dropSpeed = 0;

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
    if (this.dropSpeed === 0){
      this.speed = this.maxSpeed;
    }
    
  }

  moveDown() {
    this.dropSpeed = this.maxSpeed
  }

  moveUp() {
    this.dropSpeed = -this.maxSpeed
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#5A585C";
    let trolley = ctx.fillRect(this.position.x, this.position.y, this.width, 20);
    let leftClaw = ctx.fillRect(this.position.x, this.position.y + 10, 5, this.height + 25);
    let rightClaw = ctx.fillRect(this.position.x + 55, this.position.y + 10, 5, this.height + 25);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += this.speed;
    this.position.y += this.dropSpeed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.y < 0) this.position.y = 0;

    if (this.position.x + this.width > this.gameWidth){
      this.position.x = this.gameWidth - this.width;
    }

    if (this.position.y + this.height > 352){
      this.position.y =  310;
    }
      
  }
}
