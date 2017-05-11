var Aufg7_Wiese;
(function (Aufg7_Wiese) {
    class Bee {
        constructor(_x, _y) {
            this.setRandomStyle();
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
            this.g = Math.random() * 30 + 10;
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
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.fillStyle = "black";
            Aufg7_Wiese.inhalt.strokeStyle = "black";
            Aufg7_Wiese.inhalt.moveTo(this.x + 2, this.y - 12);
            Aufg7_Wiese.inhalt.arc(this.x + 2, this.y - 12, this.g, 180, 270);
            Aufg7_Wiese.inhalt.moveTo(this.x + 9, this.y - 12);
            Aufg7_Wiese.inhalt.arc(this.x + 9, this.y - 12, this.g, 180, 270);
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.stroke();
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.fillStyle = this.farbe;
            Aufg7_Wiese.inhalt.strokeStyle = this.farbe;
            Aufg7_Wiese.inhalt.moveTo(this.x + 9, this.y);
            Aufg7_Wiese.inhalt.arc(this.x + 9, this.y, this.g, 180, 270);
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.stroke();
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.fillStyle = "black";
            Aufg7_Wiese.inhalt.strokeStyle = "black";
            Aufg7_Wiese.inhalt.moveTo(this.x + 4, this.y);
            Aufg7_Wiese.inhalt.arc(this.x + 4, this.y, this.g, 180, 270);
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.stroke();
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.fillStyle = this.farbe;
            Aufg7_Wiese.inhalt.strokeStyle = this.farbe;
            Aufg7_Wiese.inhalt.moveTo(this.x, this.y);
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.g, 180, 270);
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.stroke();
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.fillStyle = "black";
            Aufg7_Wiese.inhalt.strokeStyle = "black";
            Aufg7_Wiese.inhalt.moveTo(this.x - 5, this.y - 2);
            Aufg7_Wiese.inhalt.arc(this.x - 5, this.y - 2, this.g, 180, 270);
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.stroke();
        }
    }
    Aufg7_Wiese.Bee = Bee; //ende der Klasse Bee
})(Aufg7_Wiese || (Aufg7_Wiese = {})); //ende des Namespace
//# sourceMappingURL=WieseIdeeBienen.js.map