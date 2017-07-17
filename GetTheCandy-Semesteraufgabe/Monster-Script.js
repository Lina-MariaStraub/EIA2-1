var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Monster {
        constructor(_x, _y) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
            this.speed = 0.04;
            this.setStartPosition();
            this.setTargetPosition();
            console.log("Create Monster");
        }
        setStartPosition() {
            this.x = 1250;
            this.y = 420;
        }
        setTargetPosition() {
            let i = Math.floor(Math.random() * (Semesteraufgabe.sweets.length - 1));
            this.xTarget = Semesteraufgabe.sweets[i].x + 5;
            this.yTarget = Semesteraufgabe.sweets[i].y - 20;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        setRandomStyle() {
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