namespace Semesteraufgabe {

    export class Monster {

        x: number;
        y: number;
        scale: number; 
        farbe: string;
        xTarget: number;
        yTarget: number;
        speed: number;
        targetSweet:number;


 
        constructor(_x: number, _y: number) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
            this.speed =3;
            this.setStartPosition();
            this.setTargetPosition();
       
            console.log("Create Monster");
             
        }
        
        setStartPosition(): void {
            this.x = 1450;
            this.y = 680;          
            
        }
        
        setTargetPosition(): void {

            this.targetSweet = Math.floor(Math.random() * (sweets.length - 1));
            console.log("candynummer: " + this.targetSweet);
            this.xTarget = sweets[this.targetSweet].x + 5;
            this.yTarget = sweets[this.targetSweet].y - 20;
        }

        update(): void {
            this.move();
            this.search();
            this.draw();
        }

        search(): void {

            //ankommen
            let maxDistance: number = 10;
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            console.log("x:  " +xDiff + " - y: " + yDiff);
            
            if (Math.abs(xDiff) <= maxDistance && Math.abs(yDiff) <= maxDistance) {
                console.log(sweets);
                // fressen
                sweets.splice(this.targetSweet, 1);
            
            // neues target
                this.setTargetPosition();

                }
    
        }

        move(): void {
            
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            let distance: number= 0.5;
            if (Math.abs(xDiff) < distance && Math.abs(yDiff) < distance){ 
                this.x= this.xTarget;
                this.y= this.yTarget;
                }
            else {
                    
                    this.x += Math.sign(xDiff) * this.speed;
                    this.y += Math.sign(yDiff) * this.speed;
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
            inhalt.arc(this.x - 20, this.y - 12, this.scale + 25, 180, 270);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();


            inhalt.moveTo(this.x + 2, this.y - 12);
            inhalt.beginPath();
            inhalt.arc(this.x - 25, this.y - 18, this.scale + 5, 0, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();



        }
    }
}