namespace Semesteraufgabe {
    export class LollipopSweet extends Sweet {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create Lollipop");
        }
        
         draw(): void {

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 17, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 12, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 7, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 2, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius-5, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();
        }
    }
}