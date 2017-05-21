var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    class Bee {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.fly();
            this.drawBiene();
        }
        fly() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
            this.x--;
        }
        setRandomStyle() {
            this.scale = Math.random() * 5 + 2;
            this.farbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        fullOutAndIn() {
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
        drawBiene() {
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = "black";
            Aufg8_Wiese.inhalt.strokeStyle = "black";
            Aufg8_Wiese.inhalt.moveTo(this.x + 2, this.y - 12);
            Aufg8_Wiese.inhalt.arc(this.x + 2, this.y - 12, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.moveTo(this.x + 9, this.y - 12);
            Aufg8_Wiese.inhalt.arc(this.x + 9, this.y - 12, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = this.farbe;
            Aufg8_Wiese.inhalt.strokeStyle = this.farbe;
            Aufg8_Wiese.inhalt.moveTo(this.x + 9, this.y);
            Aufg8_Wiese.inhalt.arc(this.x + 9, this.y, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = "black";
            Aufg8_Wiese.inhalt.strokeStyle = "black";
            Aufg8_Wiese.inhalt.moveTo(this.x + 4, this.y);
            Aufg8_Wiese.inhalt.arc(this.x + 4, this.y, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = this.farbe;
            Aufg8_Wiese.inhalt.strokeStyle = this.farbe;
            Aufg8_Wiese.inhalt.moveTo(this.x, this.y);
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = "black";
            Aufg8_Wiese.inhalt.strokeStyle = "black";
            Aufg8_Wiese.inhalt.moveTo(this.x - 5, this.y - 2);
            Aufg8_Wiese.inhalt.arc(this.x - 5, this.y - 2, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
        }
    }
    Aufg8_Wiese.Bee = Bee;
})(Aufg8_Wiese || (Aufg8_Wiese = {}));
//# sourceMappingURL=WieseIdeeBienen.js.map