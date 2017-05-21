namespace Aufg8_Wiese {
    export class Honigbiene extends Bee {
        
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.04;
            this.setStartPosition();
//            this.setRandomTargetPosition();
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
        
        setStartPosition(): void {
            this.x = 1250;
            this.y = 420;
            
            
        }
        
        setRandomTargetPosition(): void {
            this.xTarget = Math.random() * inhalt.canvas.width;
            this.yTarget = Math.random() * inhalt.canvas.height;
        }
        

        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5) 
                this.setRandomTargetPosition();
            else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            }

    }//ende der Klasse Bee
} //ende des Namespace