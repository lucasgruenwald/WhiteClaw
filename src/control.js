export default class Control {
    draw(ctx){
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
}