namespace Aufg8_Wiese {
    export class LollipopFlower extends Flower {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }
        
         draw(): void {

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 20, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 15, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 10, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 5, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();
        }
    }
}