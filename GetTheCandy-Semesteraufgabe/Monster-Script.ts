namespace Semesteraufgabe {

    export class Monster {

        x: number;
        y: number;
        scale: number;
        farbe: string;
        xTarget: number;
        yTarget: number;
        speed: number;
        targetSweet: Sweet;
        xDirection: number;
        yDirection: number;
        active: boolean;
        eatenCandy: number = 0;



        constructor(_x: number, _y: number) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
            this.speed = 5;
            this.setStartPosition();
            this.setTargetPosition();
            this.active = true;

            console.log("Create Monster");

        }

        setStartPosition(): void {
            this.x = 1450;
            this.y = 680;

        }

        stop(): void {
            this.active = false;

        }

        setTargetPosition(): void {

            if (sweets.length == 0) {
                this.stop();
            }
            else {

                let n: number = Math.floor(Math.random() * (sweets.length - 1));
                this.targetSweet = sweets[n];
                this.xTarget = sweets[n].x + 5;
                this.yTarget = sweets[n].y - 20;

                let xDiff: number = this.xTarget - this.x;
                let yDiff: number = this.yTarget - this.y;
                this.xDirection = xDiff / (Math.sqrt(xDiff * xDiff + yDiff * yDiff));
                this.yDirection = yDiff / (Math.sqrt(xDiff * xDiff + yDiff * yDiff));
            }

        }

        update(): void {
            if (this.active == true) {
                this.move(); //bewegt sich
                this.eatCandyIfClose(); //sucht sich sein fressen,frisst, neues fressen suchen
            }
            this.draw(); // zeichnet monster
        }

        eatCandyIfClose(): void {

            //ankommen
            let maxDistance: number = 10;
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) <= maxDistance && Math.abs(yDiff) <= maxDistance) {
                // fressen               
                sweets.splice(sweets.indexOf(this.targetSweet) , 1);
                // neues target
                this.setTargetPosition();  
                
                this.eatenCandy += 1;
            }
            if (this.eatenCandy == 3) {

                this.stop();
                alert("Du has leider verloren. Ich hab dich am Anfang des Spiels gewarnt!" + "Lade das Spiel neu, um es erneut zu versuchen.");
            }
        }
        
        sweetChanged(_i: Sweet): void {

            console.log(this.targetSweet);
            if (_i == this.targetSweet) {

                this.setTargetPosition();

            }
            
            
                }
  
        move(): void {

            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            let distance: number = 0.5;
            if (Math.abs(xDiff) < distance && Math.abs(yDiff) < distance) {
                this.x = this.xTarget;
                this.y = this.yTarget;
            }
            else {

                this.x += this.xDirection * this.speed;
                this.y += this.yDirection * this.speed;
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