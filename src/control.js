export default class Control {
    draw(ctx){
        // left arrow
        ctx.fillStyle = "white"
        ctx.beginPath();
        ctx.moveTo(190, 420);
        ctx.lineTo(230, 400);
        ctx.lineTo(230, 440);
        ctx.fill();
        // drop button
        ctx.fillStyle = "lightgreen"
        ctx.fillRect(250, 400, 70, 40)
        // drop button text
        ctx.fillStyle = "black";
        ctx.font = "bold 18px arial";
        ctx.fillText("DROP", 260, 426);
        // right arrow
        ctx.fillStyle = "white"
        ctx.beginPath();
        ctx.moveTo(380, 420);
        ctx.lineTo(340, 400);
        ctx.lineTo(340, 440);
        ctx.fill();
    }
}