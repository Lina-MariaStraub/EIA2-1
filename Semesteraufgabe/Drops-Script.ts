namespace Semesteraufgabe {
    export class DropsSweet extends Sweet {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create Drops");
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
            inhalt.arc(this.x , this.y , this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "white";
            inhalt.fill();
            inhalt.closePath();

            
            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x + 10, this.y + 12, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "yellow";
            inhalt.fill();
            inhalt.closePath();


           
            
        
        }


    }//ende der Klasse Bee
} //ende des Namespace