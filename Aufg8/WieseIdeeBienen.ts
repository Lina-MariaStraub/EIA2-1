namespace Aufg8_Wiese {

    export class Bee {

        x: number;
        y: number;
        scale: number; // Was ist g?
        farbe: string;

 
        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
             
        }

        update(): void {
            this.fly();
            this.drawBiene();
        }

        fly(): void {

            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
            this.x--;

        }

        setRandomStyle(): void {
            this.scale = Math.random() * 5 + 2;
            this.farbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        fullOutAndIn(): void {

            if (this.x < 0) {
                this.x = 1500;
            }
            if (this.y < 0) {
                this.y = 710;
            }
            if (this.y > 710) {
                this.y = 0;
            }

        }

        drawBiene(): void {
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
        }
}