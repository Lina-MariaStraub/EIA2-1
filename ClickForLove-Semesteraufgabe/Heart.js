var Love;
(function (Love) {
    class Heart {
        constructor(_x, _y, _radius, _winkel) {
            this.setStartPosition();
            this.x = _x;
            this.y = _y;
        }
        setStartPosition() {
            this.x = 750;
            this.y = 355;
        }
        draw() {
            Love.inhalt.moveTo(0, 0);
            Love.inhalt.beginPath();
            Love.inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
            Love.inhalt.fillStyle = "red";
            Love.inhalt.fill();
            Love.inhalt.closePath();
            Love.inhalt.moveTo(0, 0);
            Love.inhalt.beginPath();
            Love.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Love.inhalt.fillStyle = "red";
            Love.inhalt.fill();
            Love.inhalt.closePath();
            Love.inhalt.beginPath();
            Love.inhalt.fillStyle = " red ";
            Love.inhalt.strokeStyle = "red";
            Love.inhalt.moveTo(this.x, this.y);
            Love.inhalt.lineTo(this.x - 15, this.y + 15);
            Love.inhalt.lineTo(this.x - 15, this.y - 15);
            Love.inhalt.closePath();
            Love.inhalt.fill();
            Love.inhalt.stroke();
        } //ende drawHeart
    }
    Love.Heart = Heart;
})(Love || (Love = {}));
//# sourceMappingURL=Heart.js.map