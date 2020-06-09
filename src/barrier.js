export default class Barrier {
    draw(ctx){
        // control panel
        ctx.fillStyle = "black"
        ctx.fillRect(125, 390, 350, 60)
        ctx.fillRect(470, 0, 5, 600)

        ctx.fillStyle = "#757373"
        ctx.fillRect(125, 220, 5, 300);
        ctx.fillRect(125, 450, 350, 100);
        ctx.fillRect(0, 390, 130, 160);

        ctx.fillStyle = "#474747"
        ctx.fillRect(20, 415, 90, 120)
        // claw bar 
        ctx.fillStyle = "#AEA8B6"
        ctx.fillRect(0, 25, 470, 5)
    }
}