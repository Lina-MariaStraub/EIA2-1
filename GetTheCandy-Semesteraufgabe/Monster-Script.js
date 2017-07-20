var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Monster {
        constructor(_x, _y) {
            this.eatenCandy = 0;
            this.scale = 3;
            this.x = _x;
            this.y = _y;
            this.speed = 4;
            this.setTargetPosition();
            this.active = true;
            console.log("Create Monster");
        }
        stop() {
            this.active = false;
        }
        // Ein zufälliges Ziel wird aus dem Array bestimmt, welches dann vom Monster angestrebt wird
        setTargetPosition() {
            if (Semesteraufgabe.sweets.length == 0) {
                this.stop();
            }
            else {
                let n = Math.floor(Math.random() * (Semesteraufgabe.sweets.length - 1));
                // targetSweet ist nun das angestrebte Ziel, sprich die nte Stelle des Arrays
                this.targetSweet = Semesteraufgabe.sweets[n];
                this.xTarget = Semesteraufgabe.sweets[n].x + 5;
                this.yTarget = Semesteraufgabe.sweets[n].y - 20;
                // gibt dem sich linear bewegenden Monster an, in welche Richtung es sich bewegen soll
                let xDiff = this.xTarget - this.x;
                let yDiff = this.yTarget - this.y;
                this.xDirection = xDiff / (Math.sqrt(xDiff * xDiff + yDiff * yDiff));
                this.yDirection = yDiff / (Math.sqrt(xDiff * xDiff + yDiff * yDiff));
            }
        }
        update() {
            if (this.active == true) {
                this.move(); //bewegt sich
                this.eatCandyIfClose(); //sucht sich sein fressen,frisst, neues fressen suchen
            }
            this.draw(); // zeichnet monster
        }
        eatCandyIfClose() {
            //ankommen am Ziel durch Berechnung der Differenz der aktuellen Position und der Position des Sweets (maxDistance= kleiner Puffer)
            let maxDistance = 10;
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) <= maxDistance && Math.abs(yDiff) <= maxDistance) {
                // fressen               
                Semesteraufgabe.sweets.splice(Semesteraufgabe.sweets.indexOf(this.targetSweet), 1);
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
        sweetChanged(_i) {
            if (_i == this.targetSweet) {
                this.setTargetPosition();
            }
        }
        move() {
            this.x += this.xDirection * this.speed;
            this.y += this.yDirection * this.speed;
        }
        draw() {
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = "black";
            Semesteraufgabe.inhalt.strokeStyle = "black";
            Semesteraufgabe.inhalt.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.inhalt.arc(this.x - 20, this.y - 12, this.scale + 25, 180, 270);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x - 25, this.y - 18, this.scale + 5, 0, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#FFFFFF";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
        }
    }
    Semesteraufgabe.Monster = Monster;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Monster-Script.js.map