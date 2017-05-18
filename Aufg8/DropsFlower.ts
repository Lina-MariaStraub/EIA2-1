namespace Aufg8_Wiese {
    export class DropsFlower extends Flower {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }

        draw(): void {

            
            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#e066ff";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x + 7, this.y + 9, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff6347";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x + 10, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#e066ff";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x + 3, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff6347";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x - 8, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#e066ff";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x - 12, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff6347";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();
            
        
        }


    }//ende der Klasse Bee
} //ende des Namespace