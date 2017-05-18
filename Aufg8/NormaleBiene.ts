namespace Aufg8_Wiese {
    export class NormaleBiene extends Bee {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }

        draw(): void {

            inhalt.beginPath();
            inhalt.fillStyle = "black";
            inhalt.strokeStyle = "black";
            inhalt.moveTo(this.x + 2, this.y - 12);
            inhalt.arc(this.x + 2, this.y - 12, this.scale, 180, 270);
            inhalt.moveTo(this.x + 9, this.y - 12);
            inhalt.arc(this.x + 9, this.y - 12, this.scale, 180, 270);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.beginPath();
            inhalt.fillStyle = this.farbe;
            inhalt.strokeStyle = this.farbe;
            inhalt.moveTo(this.x + 9, this.y);
            inhalt.arc(this.x + 9, this.y, this.scale, 180, 270);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.beginPath();
            inhalt.fillStyle = "black";
            inhalt.strokeStyle = "black";
            inhalt.moveTo(this.x + 4, this.y);
            inhalt.arc(this.x + 4, this.y, this.scale, 180, 270);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.beginPath();
            inhalt.fillStyle = this.farbe;
            inhalt.strokeStyle = this.farbe;
            inhalt.moveTo(this.x, this.y);
            inhalt.arc(this.x, this.y, this.scale, 180, 270);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.beginPath();
            inhalt.fillStyle = "black";
            inhalt.strokeStyle = "black";
            inhalt.moveTo(this.x - 5, this.y - 2);
            inhalt.arc(this.x - 5, this.y - 2, this.scale, 180, 270);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();
        }


    }//ende der Klasse Bee
} //ende des Namespace