namespace Semesteraufgabe {

    export class Monster {

        x: number;
        y: number;
        scale: number; 
        farbe: string;
        xTarget: number;
        yTarget: number;
        speed: number;

 
        constructor(_x: number, _y: number) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
            this.speed = 0.04;
            this.setStartPosition();
            this.setTargetPosition();
            console.log("Create Monster");
             
        }
        
        setStartPosition(): void {
            this.x = 1250;
            this.y = 420;          
            
        }
        
        setTargetPosition(): void {
            let i: number = Math.floor(Math.random() * (sweets.length - 1));
            this.xTarget = sweets[i].x + 5;
            this.yTarget = sweets[i].y - 20;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {

            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5) 
                this.setTargetPosition();
            else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            

        }

        setRandomStyle(): void {
            this.scale = Math.random() * 5 + 2;

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

        draw(): void {
            inhalt.beginPath();
            inhalt.fillStyle = "black";
            inhalt.strokeStyle = "black";
            inhalt.moveTo(this.x + 2, this.y - 12);
            inhalt.arc(this.x -20, this.y - 12, this.scale+25, 180, 270);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            
            inhalt.moveTo(this.x + 2, this.y - 12);
            inhalt.beginPath();
            inhalt.arc(this.x-25, this.y-18, this.scale+5, 0, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();
            


            }
        }
}