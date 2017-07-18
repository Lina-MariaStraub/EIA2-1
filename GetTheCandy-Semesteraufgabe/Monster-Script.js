var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Monster {
        constructor(_x, _y) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
            this.speed = 3;
            this.setStartPosition();
            this.setTargetPosition();
            console.log("Create Monster");
        }
        setStartPosition() {
            this.x = 1450;
            this.y = 680;
        }
        setTargetPosition() {
            this.targetSweet = Math.floor(Math.random() * (Semesteraufgabe.sweets.length - 1));
            console.log("candynummer: " + this.targetSweet);
            this.xTarget = Semesteraufgabe.sweets[this.targetSweet].x + 5;
            this.yTarget = Semesteraufgabe.sweets[this.targetSweet].y - 20;
        }
        update() {
            this.move();
            this.search();
            this.draw();
        }
        search() {
            //ankommen
            let maxDistance = 10;
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            console.log("x:  " + xDiff + " - y: " + yDiff);
            if (Math.abs(xDiff) <= maxDistance && Math.abs(yDiff) <= maxDistance) {
                console.log(Semesteraufgabe.sweets);
                // fressen
                Semesteraufgabe.sweets.splice(this.targetSweet, 1);
                // neues target
                this.setTargetPosition();
            }
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            let distance = 0.5;
            if (Math.abs(xDiff) < distance && Math.abs(yDiff) < distance) {
                this.x = this.xTarget;
                this.y = this.yTarget;
            }
            else {
                this.x += Math.sign(xDiff) * this.speed;
                this.y += Math.sign(yDiff) * this.speed;
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