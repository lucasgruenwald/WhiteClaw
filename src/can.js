import Claw from "./claw";

export default class Can {

    constructor(gameWidth, gameHeight, claw) {
        this.gameWidth = gameWidth;
        this.clawPosition = Claw.xPos
        this.position = {
            x: gameWidth - 410,
            y: gameHeight - 530
        };
        this.clawPos = claw.position.x
        this.claw = claw
    }

    draw(ctx) {
        let can = document.getElementById("img-can")
        // console.log(this.clawPos)
        
        if (this.claw.removeCan1 === false && (!this.claw.foundCans.includes(1) || !this.claw.removeCan1)){
            ctx.drawImage(can, 140, 280, 70, 120);
        }
        if (this.claw.removeCan2 === false  && (!this.claw.foundCans.includes(2) || !this.claw.removeCan2)) {
            ctx.drawImage(can, 230, 280, 70, 120);
        }
        if (this.claw.removeCan3 === false  && (!this.claw.foundCans.includes(3) || !this.claw.removeCan3)) {
            ctx.drawImage(can, 328, 280, 70, 120);
        }
        
        // ctx.save();
        // ctx.rotate(1 / 4);
        // ctx.drawImage(can, 452, 165, 70, 120);
        // ctx.restore();


        if (this.claw.successful && this.claw.clawBottom){
            let clawCan = ctx.drawImage(can, this.claw.position.x - 5, this.claw.position.y + 25, 70, 120);
        };

        
    }

    // raise(){
    //     this.position
    // }
}