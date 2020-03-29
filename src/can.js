
export default class Can {

    draw(ctx) {
        let can = document.getElementById("img-can")
        ctx.drawImage(can, 140, 280, 70, 120);
        ctx.drawImage(can, 230, 280, 70, 120);
        ctx.drawImage(can, 328, 280, 70, 120);

        ctx.save();
        ctx.rotate(1 / 4);
        ctx.drawImage(can, 452, 165, 70, 120);
        ctx.restore();
    }
}