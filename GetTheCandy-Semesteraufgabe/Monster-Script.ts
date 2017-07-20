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
            this.scale = 3;
            this.x = _x;
            this.y = _y;
            this.speed = 5;
            this.setTargetPosition();
            this.active = true;

            console.log("Create Monster");

        }

        stop(): void {
            this.active = false;

        }


        // Ein zufälliges Ziel wird aus dem Array bestimmt, welches dann vom Monster angestrebt wird
        setTargetPosition(): void {

            if (sweets.length == 0) {
                this.stop();
            }
            else {

                let n: number = Math.floor(Math.random() * (sweets.length - 1));
                // targetSweet ist nun das angestrebte Ziel, sprich die nte Stelle des Arrays
                this.targetSweet = sweets[n];
                this.xTarget = sweets[n].x + 5;
                this.yTarget = sweets[n].y - 20;

                // gibt dem sich linear bewegenden Monster an, in welche Richtung es sich bewegen soll
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

            //ankommen am Ziel durch Berechnung der Differenz der aktuellen Position und der Position des Sweets (maxDistance= kleiner Puffer)
            let maxDistance: number = 10;
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) <= maxDistance && Math.abs(yDiff) <= maxDistance) {
                // fressen               
                sweets.splice(sweets.indexOf(this.targetSweet), 1);
                // neues target
                this.setTargetPosition();

                this.eatenCandy += 1;
            }
            // es darf nur 3 Stück essen, dann ist das Spiel vorbei
            if (this.eatenCandy == 3) {

                this.stop();
                alert("Du has leider verloren. Ich hab dich am Anfang des Spiels gewarnt!" + "Lade das Spiel neu, um es erneut zu versuchen.");
            }
        }
        // dem Monster wird mittgeteilt, ob sein Ziel schon vor dem fressen vernichtet wurde, falls ja, neues Ziel
        // Aufruf bei jedem klick
        sweetChanged(_i: Sweet): void {
            if (_i == this.targetSweet) {
                this.setTargetPosition();
            }
        }

        move(): void {

            this.x += this.xDirection * this.speed;
            this.y += this.yDirection * this.speed;
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