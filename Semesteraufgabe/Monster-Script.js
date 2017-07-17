var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Bee {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.fly();
            this.draw();
        }
        fly() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
            this.x--;
        }
        setRandomStyle() {
            this.scale = Math.random() * 5 + 2;
            this.farbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
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
        draw() {
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = "black";
            Semesteraufgabe.inhalt.strokeStyle = "black";
            Semesteraufgabe.inhalt.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.inhalt.arc(this.x + 2, this.y - 12, this.scale, 180, 270);
            Semesteraufgabe.inhalt.moveTo(this.x + 9, this.y - 12);
            Semesteraufgabe.inhalt.arc(this.x + 9, this.y - 12, this.scale, 180, 270);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = this.farbe;
            Semesteraufgabe.inhalt.strokeStyle = this.farbe;
            Semesteraufgabe.inhalt.moveTo(this.x + 9, this.y);
            Semesteraufgabe.inhalt.arc(this.x + 9, this.y, this.scale, 180, 270);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = "black";
            Semesteraufgabe.inhalt.strokeStyle = "black";
            Semesteraufgabe.inhalt.moveTo(this.x + 4, this.y);
            Semesteraufgabe.inhalt.arc(this.x + 4, this.y, this.scale, 180, 270);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = this.farbe;
            Semesteraufgabe.inhalt.strokeStyle = this.farbe;
            Semesteraufgabe.inhalt.moveTo(this.x, this.y);
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.scale, 180, 270);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = "black";
            Semesteraufgabe.inhalt.strokeStyle = "black";
            Semesteraufgabe.inhalt.moveTo(this.x - 5, this.y - 2);
            Semesteraufgabe.inhalt.arc(this.x - 5, this.y - 2, this.scale, 180, 270);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
        }
    }
    Semesteraufgabe.Bee = Bee;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Monster-Script.js.map