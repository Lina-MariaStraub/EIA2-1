namespace Aufg8_Wiese {
    export class BonBonFlower extends Flower {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }
        
        
        draw(): void {

            inhalt.beginPath();

            inhalt.fillStyle = " #c71585 ";
            inhalt.strokeStyle = "#c71585";
            inhalt.moveTo(this.x, this.y);
            inhalt.lineTo(this.x + 15, this.y - 15);
            inhalt.lineTo(this.x + 15, this.y + 15);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.beginPath();
            inhalt.fillStyle = " #c71585 ";
            inhalt.strokeStyle = "#c71585";
            inhalt.moveTo(this.x, this.y);
            inhalt.lineTo(this.x - 15, this.y + 15);
            inhalt.lineTo(this.x - 15, this.y - 15);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff69b4";
            inhalt.fill();
            inhalt.closePath();
        }
        
        }
    }